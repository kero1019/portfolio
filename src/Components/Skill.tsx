import React from 'react'
interface SkillProps {
    name: string;
    icon: React.ReactNode;
    color:string
} 
export default function Skill({name,icon,color}:SkillProps) {
  return (
    <div className='flex gap-5 items-center p-5 [&_p]:text-3xl'>
        <p className=''>{name}</p>
        <p style={{ color }}>{icon}</p>
    </div>
  )
}
