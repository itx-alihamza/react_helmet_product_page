import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.tsx'
import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
// import Footer from './components/Footer.tsx'
// import Header from './components/Header.tsx'

const container = document.getElementById('root');
console.log('🔍 Smart Helmet: Container found?', container);

if (container) {
  const root = createRoot(container);
  console.log('✅ Smart Helmet: Rendering app...');
  root.render(
    <StrictMode>
      <Header />
      <App />
      <Footer />
    </StrictMode>
  );
} else {
  console.error('❌ Smart Helmet: #smart-helmet-root not found. Did the shortcode load?');
}