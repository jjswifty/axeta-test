import React, { useState } from "react"
import { useEffect } from "react"
import { useStoreon } from "storeon/react"
import { SkillsEvents, SkillsState } from "../../../../store/skills.module"
import { isValueNumber } from "../../../../utils/regexUtils"
import { CustomInput } from "../../../common/CustomInput"
import s from './ExperienceSkill.module.sass'

interface ExperienceSkillProps {
    skill: string
    experience: number
    index: number
}

export const ExperienceSkill = (props: ExperienceSkillProps) => {

    const { dispatch } = useStoreon<SkillsState, SkillsEvents>('skills')

    const [experience, setExperience] = useState(props.experience)
    const [isEdit, setIsEdit] = useState(false)

    useEffect(() => {
        setExperience(props.experience)
    }, [props.experience, props.index, props.skill])

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isValueNumber(Number(e.target.value))) e.preventDefault()
        else setExperience(Number(e.target.value))
    }

    const validateAndDispatch = () => {
        if (!isValueNumber(experience)) return
        dispatch('skills/change/skill', {
            newSkill: {
                experience,
                skill: props.skill
            },
            index: props.index
        })
        setIsEdit(false)
    }

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            validateAndDispatch()
            setIsEdit(false)
        }
    }

    const onFocus = () => {
        setIsEdit(true)
        setExperience(Number(experience.toString().split(' ')[0]))
    }

    const onBlur = () => {
        validateAndDispatch()
        setIsEdit(false)
    }

    return <div className={s.wrapper}>
        <p className={s.skill}>{props.skill}</p> 
        <CustomInput 
            isValid={null}
            inputCustomStyle={s.input}
            value={isEdit ? experience.toString() : experience.toString() + ' years'} 
            onFocus={onFocus}
            onKeyDown={onKeyDown} 
            onInput={onInput}
            onBlur={onBlur}
        />
    </div>
}