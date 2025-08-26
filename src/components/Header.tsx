import SimplePic from "./SimplePic"
import { navItems, type NavItems } from '../utils/constants';
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleHamburgor = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="relative flex justify-between md:justify-around items-center w-screen responsive-header-padding h-18 bg-[url('/assets/header_bg.png')]  bg-cover bgs-center bg-no-repeat">
            <div className="flex md:flex-none justify-center items-center">
                <SimplePic
                    alt="Logo"
                    src="./assets/logo.png"
                    className="h-15 w-35"
                />
            </div>
            <nav className={`absolute md:flex justify-center items-center md:static md:opacity-full md:h-full z-10 top-18 left-0 min-h-8 w-full md:w-auto bg-white md:bg-transparent md:text-white md:opacity-100 transition-all duration-500 ease-in-out  ${isOpen ? 'opacity-full translate-x-0' : 'opacity-0 -translate-x-full md:translate-0'}`}>
                <ul className=" flex flex-col gap-x-8 md:flex-row md:whitespace-nowrap justify-center md:justify-end items-center responsive-body">
                    {navItems.map((i: NavItems, key: number) => (
                        <li onClick={handleHamburgor} key={key} className="w-full flex justify-center items-center md:text-sm md:hover:underline py-1.5 md:py-0 border-b-[1px] md:border-none border-gray-600 last:border-none md:hover:scale-120 transition-transform duration-300"><a href={i.link} className="cursor">{i.name}</a></li>
                    ))}
                </ul>
            </nav>
            <div onClick={handleHamburgor} className={`md:hidden block p-4 space-y-1.5 transition-all duration-300 ease-in-out`}>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-500 ease-in-out  ${isOpen && 'rotate-45 translate-y-2'}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-500 ease-in-out  ${isOpen && 'opacity-0'}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-500 ease-in-out  ${isOpen && '-rotate-45 -translate-y-2'}`}></span>
            </div>
        </div>
    )
}

export default Header
