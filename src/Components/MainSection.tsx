'use client';
import React from 'react'
import { ReactTyped } from 'react-typed';
import Image from 'next/image';
import kerolos from '@/Assets/Images/Kerolos_Fayez_profile_image-removebg-preview.png';
export default function MainSection() {
    return (<section id="home" className="flex flex-col-reverse items-center justify-center gap-10 scroll-mt-28 lg:flex-row lg:gap-5">
        <div className="flex w-full flex-col items-center justify-center gap-5">
            <h1 className='text-center text-4xl font-bold text-(--violet-color) shadow sm:text-5xl lg:text-7xl'>Kerolos Fayez</h1>
            <div className="flex w-full items-center justify-center gap-3 sm:gap-5">
                <p className='h-0.5 w-12 sm:w-1/12 line'></p>
                <h2 className='text-center text-lg font-bold text-(--gray-color) sm:text-2xl'>
                    <ReactTyped
                        strings={['Front End Developer', 'React Developer', 'Software Engineer']}
                        typeSpeed={50}
                        backSpeed={50}
                        loop
                    />
                </h2>
                <p className='h-0.5 w-12 sm:w-1/12 line'></p>
            </div>
            <p className='w-full max-w-2xl text-center text-base text-(--white-color) sm:text-lg'>Junior Front End Developer with 2 years of self-driven experience, focused on building modern, responsive, and user-centered web interfaces. Skilled in turning ideas into high-quality solutions through strong problem-solving and effective collaboration.</p>
        </div>
        <div className="avatar-wrapper relative h-[220px] w-[220px] shrink-0 sm:h-[280px] sm:w-[280px] lg:h-[300px] lg:w-[300px]">
            <Image
                src={kerolos}
                alt="Portrait of Kerolos Fayez"
                className="avatar object-top"
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 280px, 220px"
            />
        </div>

    </section>
    )
}
