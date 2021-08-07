import React, { useState } from "react"
import { useStoreon } from "storeon/react"
import { SkillsEvents, SkillsState } from "../../../../store/skills.module"
import { isValueNumber } from "../../../../utils/regexUtils"

interface ExperienceSkillProps {
    skill: string
    experience: number
    index: number
}

export const ExperienceSkill = (props: ExperienceSkillProps) => {

    const { dispatch, skills } = useStoreon<SkillsState, SkillsEvents>('skills')

    const [experience, setExperience] = useState(props.experience)

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExperience(Number(e.target.value))
    }
    console.log(skills, 'from Component')
    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (!isValueNumber(experience)) return
            dispatch('skills/change/skill', {
                newSkill: {
                    experience,
                    skill: props.skill
                },
                index: props.index
            })
            console.log(skills, 'from onKeyDown')
        }
    }

    return <div>
        <p>-{props.skill}</p> 
        <input value={experience} onKeyDown={onKeyDown} onInput={onInput}/>
    </div>
}