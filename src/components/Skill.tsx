"use client"
import useWidthTransition from "@/hooks/useWidthTransition"
import type { Skill } from "@/data/skills"

type Props = {
  skill: Skill
}

const SkillProgression = ({ skill }: Props) => {
  const { ref } = useWidthTransition(skill.progression)

  return (
    <div className="bg-gray-200 rounded font-semibold relative h-10">
      <div
        ref={ref}
        style={{ width: 0 }}
        className={`${skill.color} absolute inset-0 h-full transition-[width] duration-1000 ease-in-out`}
        aria-hidden="true"
      ></div>
      <div className="px-4 py-2 flex z-10 absolute gap-2 items-center h-full">
        {skill.icon}
        <span className="whitespace-nowrap">{skill.tech}</span>
      </div>
    </div>
  )
}

export default SkillProgression
