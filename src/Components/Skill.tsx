import React from 'react'
interface SkillProps {
    name: string;
    icon: React.ReactNode;
    color:string
} 
export default function Skill({name,icon,color}:SkillProps) {
  return (
    <div className='flex items-center gap-3 p-3 [&_p]:text-xl sm:gap-5 sm:p-5 sm:[&_p]:text-3xl'>
        <p className=''>{name}</p>
        <p style={{ color }}>{icon}</p>
    </div>
  )
}
