import React from "react"
import { useStoreon } from "storeon/react"
import { SkillsEvents, SkillsState } from "../../../store/skills.module"
import { ExperienceSkill } from "./ExperienceSkill"

export const Experience = () => {

    const { skills } = useStoreon<SkillsState, SkillsEvents>('skills')

    return <div>
        {
            skills.map((e, i) => <ExperienceSkill experience={e.experience} index={i} skill={e.skill} key={i}/>)
        }
    </div>
}