import React from 'react'
interface SkillProps {
    name: string;
    icon: React.ReactNode;
    color:string
} 
export default function Skill({name,icon,color}:SkillProps) {
  return (
    <div className='flex shrink-0 items-center gap-3 whitespace-nowrap p-3 [&_p]:text-xl sm:gap-5 sm:p-5 sm:[&_p]:text-3xl'>
        <p>{name}</p>
        <p className='shrink-0' style={{ color }}>{icon}</p>
    </div>
  )
}
