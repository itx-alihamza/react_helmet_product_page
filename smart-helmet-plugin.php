<?php
/**
 * Plugin Name: Smart Helmet Plugin
 * Description: Loads a React product page inside WordPress.
 * Version: 1.0.0
 * Author: Your Name
 * Text Domain: smart-helmet
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('SHP_PLUGIN_URL', plugin_dir_url(__FILE__));
define('SHP_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('SHP_VERSION', '1.0.0');

/**
 * Enqueue React assets
 */
function shp_load_react_assets() {
    // Only load on specific pages/posts or everywhere (adjust as needed)
    // You can add conditions here like: if (is_page('product') || is_single())
    
    // Debug: Check if files exist before enqueuing
    $css_path = SHP_PLUGIN_PATH . 'dist/assets/index-D47-Rmaa.css';
    $js_path = SHP_PLUGIN_PATH . 'dist/assets/index-BYzwJe0w.js';
    
    // Alternative: Check for any CSS/JS files in the plugin directory
    $plugin_path = SHP_PLUGIN_PATH;
    $css_files = glob($plugin_path . '{dist/,build/,assets/,}*.css', GLOB_BRACE);
    $js_files = glob($plugin_path . '{dist/,build/,assets/,}*.js', GLOB_BRACE);
    
    // Also check subdirectories
    if (empty($css_files)) {
        $css_files = glob($plugin_path . '*/*.css');
    }
    if (empty($js_files)) {
        $js_files = glob($plugin_path . '*/*.js');
    }
    
    if (file_exists($css_path)) {
        wp_enqueue_style(
            'smart-helmet-css',
            SHP_PLUGIN_URL . 'dist/assets/index-D47-Rmaa.css',
            array(),
            SHP_VERSION
        );
    } else {
        // Try to find any CSS file
        if (!empty($css_files)) {
            $css_file = str_replace(SHP_PLUGIN_PATH, SHP_PLUGIN_URL, $css_files[0]);
            wp_enqueue_style('smart-helmet-css', $css_file, array(), SHP_VERSION);
        }
    }

    if (file_exists($js_path)) {
        wp_enqueue_script(
            'smart-helmet-js',
            SHP_PLUGIN_URL . 'dist/assets/index-BYzwJe0w.js',
            array(),
            SHP_VERSION,
            true
        );
        
        // Localize script for WordPress data (optional)
        wp_localize_script('smart-helmet-js', 'shpData', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('shp_nonce'),
            'apiUrl' => rest_url('wp/v2/'),
        ));
    } else {
        // Try to find any JS file
        if (!empty($js_files)) {
            $js_file = str_replace(SHP_PLUGIN_PATH, SHP_PLUGIN_URL, $js_files[0]);
            wp_enqueue_script('smart-helmet-js', $js_file, array(), SHP_VERSION, true);
            
            wp_localize_script('smart-helmet-js', 'shpData', array(
                'ajaxUrl' => admin_url('admin-ajax.php'),
                'nonce' => wp_create_nonce('shp_nonce'),
                'apiUrl' => rest_url('wp/v2/'),
            ));
        }
    }
}
add_action('wp_enqueue_scripts', 'shp_load_react_assets');

/**
 * Add shortcode to display React app
 */
function shp_react_app_shortcode($atts) {
    $atts = shortcode_atts(array(
        'id' => 'smart-helmet-root',
        'class' => 'smart-helmet-container'
    ), $atts);

    return '<div id="' . esc_attr($atts['id']) . '" class="' . esc_attr($atts['class']) . '"></div>';
}
add_shortcode('smart_helmet', 'shp_react_app_shortcode');

/**
 * Add React root div to specific pages (alternative to shortcode)
 */
function shp_add_react_container() {
    // Add condition to show only on specific pages
    if (is_page('product') || has_shortcode(get_post()->post_content, 'smart_helmet')) {
        echo '<div id="smart-helmet-root" class="smart-helmet-container"></div>';
    }
}
// Uncomment if you want automatic placement
// add_action('wp_footer', 'shp_add_react_container');

/**
 * Plugin activation hook
 */
function shp_activate() {
    // Add any activation logic here
    flush_rewrite_rules();
}
register_activation_hook(__FILE__, 'shp_activate');

/**
 * Plugin deactivation hook
 */
function shp_deactivate() {
    // Add any deactivation logic here
    flush_rewrite_rules();
}
register_deactivation_hook(__FILE__, 'shp_deactivate');

/**
 * Add admin menu (optional)
 */
function shp_admin_menu() {
    add_options_page(
        'Smart Helmet Settings',
        'Smart Helmet',
        'manage_options',
        'smart-helmet-settings',
        'shp_settings_page'
    );
}
add_action('admin_menu', 'shp_admin_menu');

/**
 * Settings page callback (optional)
 */
function shp_settings_page() {
    $plugin_dir = SHP_PLUGIN_PATH;
    $dist_dir = $plugin_dir . 'dist/';
    
    // Scan for actual files
    $css_files = array();
    $js_files = array();
    
    if (is_dir($dist_dir)) {
        $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dist_dir));
        foreach ($iterator as $file) {
            if ($file->isFile()) {
                $extension = pathinfo($file->getFilename(), PATHINFO_EXTENSION);
                $relative_path = str_replace($plugin_dir, '', $file->getPathname());
                
                if ($extension === 'css') {
                    $css_files[] = $relative_path;
                } elseif ($extension === 'js') {
                    $js_files[] = $relative_path;
                }
            }
        }
    }
    ?>
    <div class="wrap">
        <h1>Smart Helmet Settings</h1>
        <p>Use the shortcode <code>[smart_helmet]</code> to display the React app on any page or post.</p>
        
        <h2>File Locations Debug</h2>
        <p><strong>Plugin Directory:</strong> <code><?php echo SHP_PLUGIN_PATH; ?></code></p>
        <p><strong>Plugin URL:</strong> <code><?php echo SHP_PLUGIN_URL; ?></code></p>
        
        <h3>Found CSS Files:</h3>
        <?php if (empty($css_files)): ?>
            <p style="color: red;">No CSS files found in dist/ directory</p>
        <?php else: ?>
            <ul>
                <?php foreach ($css_files as $file): ?>
                    <li><code><?php echo esc_html($file); ?></code></li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>
        
        <h3>Found JS Files:</h3>
        <?php if (empty($js_files)): ?>
            <p style="color: red;">No JS files found in dist/ directory</p>
        <?php else: ?>
            <ul>
                <?php foreach ($js_files as $file): ?>
                    <li><code><?php echo esc_html($file); ?></code></li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>
        
        <h3>Expected Files:</h3>
        <ul>
            <li>CSS: <code>dist/assets/index-D47-Rmaa.css</code> 
                <?php echo file_exists($plugin_dir . 'dist/assets/index-D47-Rmaa.css') ? '<span style="color: green;">✓ Found</span>' : '<span style="color: red;">✗ Not Found</span>'; ?>
            </li>
            <li>JS: <code>dist/assets/index-BYzwJe0w.js</code>
                <?php echo file_exists($plugin_dir . 'dist/assets/index-BYzwJe0w.js') ? '<span style="color: green;">✓ Found</span>' : '<span style="color: red;">✗ Not Found</span>'; ?>
            </li>
        </ul>
        
        <h3>Manual File Check Instructions:</h3>
        <ol>
            <li>Check if the <code>dist/</code> folder exists in your plugin directory</li>
            <li>Verify the exact filenames match what's in your build</li>
            <li>Make sure file permissions allow reading (644 for files, 755 for directories)</li>
            <li>If using a different build tool, check your build output location</li>
        </ol>
    </div>
    <?php
}

/**
 * Add custom CSS for better integration (optional)
 */
function shp_custom_styles() {
    ?>
    <style>
    .smart-helmet-container {
        width: 100%;
        min-height: 400px;
    }
    </style>
    <?php
}
add_action('wp_head', 'shp_custom_styles');