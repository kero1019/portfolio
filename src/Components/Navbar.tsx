'use client'
import Link from 'next/link';
import { useContext} from 'react'
import { IoInvertMode, IoInvertModeOutline } from "react-icons/io5";
import { MyContext } from "./Context";
export default function Navbar() {  
    const context = useContext(MyContext);
    if (!context) throw new Error("Navbar must be used within MyProvider");
    const { value, setValue } = context;
    return (
        <header className='flex justify-between items-center bg-(--second-background-color) text-(--white-color) py-5 px-40 fixed top-0 z-50 left-0 right-0'>
            <h2 className='text-2xl font-bold cursor-pointer'>Kerolos Fayez</h2>
            <div className="flex gap-5 items-center">
                <ul className='flex gap-5 '>
                    <Link href="/"><li className='hover:text-(--blue-color) '>Home</li></Link>
                    <Link href="/about"><li className='hover:text-(--blue-color) '>About</li></Link>
                    <Link href="/projects"><li className='hover:text-(--blue-color) '>Projects</li></Link>
                    <Link href="/contact"><li className='hover:text-(--blue-color) '>Contact</li></Link>
                </ul>
                <div className='flex gap-5 items-center'>
                    <a href='https://drive.google.com/file/d/1Xnchc7kl7UrGHR1qgCG1Y1QXPiMevIfs/view?usp=sharing' target='_blank' className='bg-(--blue-color) text-(--white-color) px-5 py-2 rounded cursor-pointer'>See My CV</a>
                    { value ? <IoInvertMode size={24} className="cursor-pointer" onClick={() => setValue(!value)}/> : <IoInvertModeOutline size={24} className="cursor-pointer" onClick={() => setValue(!value)}/>}
                </div>
            </div>
        </header>
    )
}
