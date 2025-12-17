import React from 'react'
import Skill from './Skill'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSass } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import Image from "next/image";
import figmaLogo from "@/Assets/Images/Figma-logo.svg.png";
import Cpp from "@/Assets/Images/ISO_C++_Logo.svg.png"
export default function Skills() {
    return (
        <div className="wrapper [&_div]:flex [&_div]:gap-5 [&_div]:items-center [&_div]:justify-between my-20">
            <h2 className="text-5xl text-(--white-color) my-5 font-bold text-center" >Skills</h2>
            <div className="content text-(--white-color) ">
                <Skill color={"#e34c26"} name="HTML5" icon={<FaHtml5 />} />
                <Skill color={"#4290f5"} name="CSS3" icon={<FaCss3 />} />
                <Skill color={"#F7DF1E"} name="JS" icon={<FaJs />} />
                <Skill color={"#61DAFB"} name="ReactJs" icon={<SiReact />} />
            </div>
            <div className="content2 text-(--white-color) ">
                <Skill color={"#FFFFFF"} name="NextJs" icon={<SiNextdotjs />} />
                <Skill color={"#3178C6"} name="TypeScript" icon={<SiTypescript />} />
                <Skill color={"#06B6D4"} name="Tailwind CSS" icon={<RiTailwindCssFill />} />
                <Skill color={"#CC6699"} name="SASS CSS" icon={<SiSass />} />
            </div>
            <div className="content text-(--white-color) ">
                <Skill color={"#7952B3"} name="Bootstrap" icon={<FaBootstrap />} />
                <Skill color={"#FFFFFF"} name="Github" icon={<FaGithub />} />
                <Skill color={"#FF6C37"} name="Postman" icon={<SiPostman />} />
                <div className="flex items-center gap-2">
                    <p className='text-3xl'>C++</p>
                    <Image src={Cpp} alt="C++ Logo" width={30} height={30} />
                </div>
                <div className="flex items-center gap-2">
                    <p className='text-3xl'>Figma</p>
                    <Image src={figmaLogo} alt="figma" width={25} height={25} />
                </div>
            </div>
        </div>

    )
}
