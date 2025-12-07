'use client';
import React from 'react'
import { ReactTyped } from 'react-typed';
import Image from 'next/image';
import kerolos from '@/Assets/Images/Kerolos_Fayez_profile_image-removebg-preview.png';
export default function MainSection() {
    return (<div className="flex items-center justify-center gap-5 ">
        <div className="flex flex-col items-center justify-center gap-5">
            <h1 className='text-7xl font-bold text-(--violet-color) shadow'>Kerolos Fayez</h1>
            <div className="flex items-center justify-center gap-5  w-full">
                <p className='w-1/12 h-0.5 line'></p>
                <h2 className='text-2xl font-bold text-(--gray-color) '>
                    <ReactTyped
                        strings={['Front End Developer', 'React Developer', 'Software Engineer']}
                        typeSpeed={50}
                        backSpeed={50}
                        loop
                    />
                </h2>
                <p className='w-1/12 h-0.5 line'></p>
            </div>
            <p className='text-lg text-(--white-color) text-center w-[60%]'>Junior Front End Developer with 2 years of self-driven experience, focused on building modern, responsive, and user-centered web interfaces. Skilled in turning ideas into high-quality solutions through strong problem-solving and effective collaboration.</p>
        </div>
        <div className="avatar-wrapper relative w-[300px] h-[300px] shrink-0">
            <Image
                src={kerolos}
                alt="Kerlos Fayez Picture"
                className="avatar object-top"
            />
        </div>

    </div>
    )
}
