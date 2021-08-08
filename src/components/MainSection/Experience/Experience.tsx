import React from "react"
import { useStoreon } from "storeon/react"
import { SkillsEvents, SkillsState } from "../../../store/skills.module"
import { ExperienceSkill } from "./ExperienceSkill"
import s from './Experience.module.sass'

export const Experience = () => {

    const { skills } = useStoreon<SkillsState, SkillsEvents>('skills')

    return <div className={s.wrapper}>
        <h1>Experience</h1>
        <div className={s.skills}>
            {
                skills.map((e, i) => <ExperienceSkill 
                    experience={e.experience} 
                    index={i} 
                    skill={e.skill} 
                    key={i}/>
                )
            }
        </div>
    </div>
}