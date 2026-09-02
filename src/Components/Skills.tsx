import React from 'react'
import type { IconType } from 'react-icons'
import Skill from './Skill'
import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiPostman, SiReact, SiSass, SiTypescript } from "react-icons/si";
import Image from "next/image";
import figmaLogo from "@/Assets/Images/Figma-logo.svg.png";

type SkillDefinition = {
    name: string;
    color: string;
    icon: IconType;
};

const primarySkills: SkillDefinition[] = [
    { name: "HTML5", color: "#e34c26", icon: FaHtml5 },
    { name: "CSS3", color: "#4290f5", icon: FaCss3 },
    { name: "JS", color: "#F7DF1E", icon: FaJs },
    { name: "ReactJs", color: "#61DAFB", icon: SiReact },
];

const frameworkSkills: SkillDefinition[] = [
    { name: "NextJs", color: "#FFFFFF", icon: SiNextdotjs },
    { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
    { name: "Tailwind CSS", color: "#06B6D4", icon: RiTailwindCssFill },
    { name: "SASS CSS", color: "#CC6699", icon: SiSass },
];

const toolSkills: SkillDefinition[] = [
    { name: "Bootstrap", color: "#7952B3", icon: FaBootstrap },
    { name: "Github", color: "#FFFFFF", icon: FaGithub },
    { name: "Postman", color: "#FF6C37", icon: SiPostman },
];

function SkillGroup({ skills, hidden = false }: { skills: SkillDefinition[]; hidden?: boolean }) {
    return (
        <div aria-hidden={hidden || undefined} className="marquee-group flex min-w-screen shrink-0 items-center justify-around gap-3 px-3 sm:gap-5 sm:px-5">
            {skills.map(({ name, color, icon: Icon }) => (
                <Skill key={name} color={color} name={name} icon={<Icon />} />
            ))}
        </div>
    );
}

function ToolsGroup({ hidden = false }: { hidden?: boolean }) {
    return (
        <div aria-hidden={hidden || undefined} className="marquee-group flex min-w-screen shrink-0 items-center justify-around gap-3 px-3 sm:gap-5 sm:px-5">
            {toolSkills.map(({ name, color, icon: Icon }) => (
                <Skill key={name} color={color} name={name} icon={<Icon />} />
            ))}
            <div className="flex shrink-0 items-center gap-3 whitespace-nowrap p-3 sm:gap-5 sm:p-5">
                <p className='text-xl sm:text-3xl'>C++</p>
                <Image
                    src="/images/cpp-logo.png"
                    alt="C++ logo"
                    width={28}
                    height={28}
                    unoptimized
                    className="h-7 w-auto shrink-0 object-contain sm:h-8"
                />
            </div>
            <div className="flex shrink-0 items-center gap-3 whitespace-nowrap p-3 sm:gap-5 sm:p-5">
                <p className='text-xl sm:text-3xl'>Figma</p>
                <Image
                    src={figmaLogo}
                    alt="Figma logo"
                    width={20}
                    height={30}
                    className="h-6 w-auto shrink-0 sm:h-7"
                />
            </div>
        </div>
    );
}

export default function Skills() {
    return (
        <section className="wrapper my-12 sm:my-20" aria-labelledby="skills-title">
            <h2 id="skills-title" className="my-5 text-center text-3xl font-bold text-(--white-color) sm:text-5xl">Skills</h2>
            <div className="content text-(--white-color)">
                <SkillGroup skills={primarySkills} />
                <SkillGroup skills={primarySkills} hidden />
            </div>
            <div className="content2 text-(--white-color)">
                <SkillGroup skills={frameworkSkills} />
                <SkillGroup skills={frameworkSkills} hidden />
            </div>
            <div className="content text-(--white-color)">
                <ToolsGroup />
                <ToolsGroup hidden />
            </div>
        </section>
    );
}
