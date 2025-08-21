import SimplePic from "./SimplePic"

const Header = () => {
    return (
        <div className="flex justify-center items-center w-screen h-18 bg-[url('/assets/header_bg_mb.png')]">
            <div className="flex-justify-center items-center p-4 space-y-1.5"><span className="block w-6 h-0.5 bg-white transi"></span><span className="block w-6 h-0.5 bg-white"></span><span className="block w-6 h-0.5 bg-white"></span></div>
            <div className="flex flex-1 justify-center items-center">
                <SimplePic
                    alt="Logo"
                    src="/assets/logo.png"
                    className="h-15 w-35"
                />
            </div>
        </div>
    )
}

export default Header
