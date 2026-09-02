'use client'
import Link from 'next/link';
import { useContext, useState } from 'react'
import { IoClose, IoInvertMode, IoInvertModeOutline, IoMenu } from "react-icons/io5";
import { MyContext } from "./Context";
export default function Navbar() {  
    const context = useContext(MyContext);
    if (!context) throw new Error("Navbar must be used within MyProvider");
    const { value, setValue } = context;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleTheme = () => setValue(!value);
    const closeMenu = () => setIsMenuOpen(false);
    
    return (
        <header className="fixed top-0 right-0 left-0 z-50 bg-(--second-background-color) text-(--white-color) shadow-sm">
            <div className="flex items-center justify-between px-4 py-4 sm:px-8 lg:px-16 xl:px-40">
                <Link href="#home" className='text-xl font-bold sm:text-2xl'>Kerolos Fayez</Link>
                <nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex">
                <ul className='flex gap-5 '>
                    <li><Link href="#home" className='hover:text-(--blue-color)'>Home</Link></li>
                    <li><Link href="#about" className='hover:text-(--blue-color)'>About</Link></li>
                    <li><Link href="#projects" className='hover:text-(--blue-color)'>Projects</Link></li>
                    <li><Link href="#contact" className='hover:text-(--blue-color)'>Contact</Link></li>
                </ul>
                <div className='flex gap-5 items-center'>
                    <a href='https://drive.google.com/file/d/1Xnchc7kl7UrGHR1qgCG1Y1QXPiMevIfs/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='rounded bg-(--blue-color) px-5 py-2 text-white'>See My CV</a>
                    <button
                        type="button"
                        aria-label={value ? "Switch to light mode" : "Switch to dark mode"}
                        className="cursor-pointer"
                        onClick={toggleTheme}
                    >
                        {value ? <IoInvertMode size={24} /> : <IoInvertModeOutline size={24} />}
                    </button>
                </div>
                </nav>
                <div className="flex items-center gap-3 lg:hidden">
                    <button
                        type="button"
                        aria-label={value ? "Switch to light mode" : "Switch to dark mode"}
                        className="cursor-pointer"
                        onClick={toggleTheme}
                    >
                        {value ? <IoInvertMode size={22} /> : <IoInvertModeOutline size={22} />}
                    </button>
                    <button
                        type="button"
                        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        className="cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-(--surface-border-color) px-4 py-4 lg:hidden">
                    <ul className="flex flex-col gap-4 text-center text-lg">
                        <li><Link href="#home" onClick={closeMenu} className="hover:text-(--blue-color)">Home</Link></li>
                        <li><Link href="#about" onClick={closeMenu} className="hover:text-(--blue-color)">About</Link></li>
                        <li><Link href="#projects" onClick={closeMenu} className="hover:text-(--blue-color)">Projects</Link></li>
                        <li><Link href="#contact" onClick={closeMenu} className="hover:text-(--blue-color)">Contact</Link></li>
                    </ul>
                    <a href='https://drive.google.com/file/d/1Xnchc7kl7UrGHR1qgCG1Y1QXPiMevIfs/view?usp=sharing' target='_blank' rel="noopener noreferrer" className='mt-5 block rounded bg-(--blue-color) px-5 py-3 text-center font-medium text-white' onClick={closeMenu}>See My CV</a>
                </nav>
            )}
        </header>
    )
}
