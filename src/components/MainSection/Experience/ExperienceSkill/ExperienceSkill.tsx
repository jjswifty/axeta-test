import React, { useState } from "react"
import { useEffect } from "react"
import { useStoreon } from "storeon/react"
import { SkillsEvents, SkillsState } from "../../../../store/skills.module"
import { isValueNumber } from "../../../../utils/regexUtils"
import s from './ExperienceSkill.module.sass'

interface ExperienceSkillProps {
    skill: string
    experience: number
    index: number
}

export const ExperienceSkill = (props: ExperienceSkillProps) => {

    const { dispatch } = useStoreon<SkillsState, SkillsEvents>('skills')

    const [experience, setExperience] = useState(props.experience)

    useEffect(() => {
        setExperience(props.experience)
    }, [props.experience])

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isValueNumber(Number(e.target.value))) e.preventDefault()
        else setExperience(Number(e.target.value))
    }

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
        }
    }

    return <div className={s.wrapper}>
        <p>-{props.skill}</p> 
        <input value={experience} 
            onKeyDown={onKeyDown} 
            onInput={onInput}/>
    </div>
}