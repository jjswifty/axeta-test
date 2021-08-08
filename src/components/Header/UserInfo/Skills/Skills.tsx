import { useEffect } from "react"
import { useRef, useState } from "react"
import { useStoreon } from 'storeon/react'
import { ISkill } from "../../../../interfaces/Skill"
import { isValueLetter } from "../../../../utils/regexUtils"
import { CustomInput } from "../../../common/CustomInput"
import { Skill } from "./Skill/Skill"
import s from './Skills.module.sass'

export const Skills = () => {

    const { dispatch, skills } = useStoreon('skills')
    const [isValid, setIsValid] = useState(true)
    const [isEdit, setIsEdit] = useState(false)
    const inputRef: React.RefObject<HTMLInputElement> = useRef(null)
    const [newSkill, setNewSkill] = useState({
        skill: '',
        experience: 0
    } as ISkill)

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isValueLetter(e.target.value)) setIsValid(false)
        else setIsValid(true)
        setNewSkill({
            skill: e.target.value,
            experience: 0
        })
    }

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (!isValueLetter(newSkill.skill)) return
            dispatch('skills/set/skill', {newSkill})
            setNewSkill({
                skill: '',
                experience: 0
            })
            setIsValid(false)
            setIsEdit(false)
        }
    }

    const onBlur = () => {
        setIsEdit(false)
    }

    useEffect(() => {
        if (isEdit) inputRef.current?.focus()
    }, [isEdit])

    return (
        <div className={s.wrapper}>
            {skills.map((e: ISkill, index: number) => <Skill index={index} skill={e.skill} key={index}/>)}
            {
                isEdit ? <CustomInput 
                    inputRef={inputRef}
                    isValid={isValid}
                    value={newSkill.skill} 
                    onInput={onInput} 
                    onKeyDown={onKeyDown}
                    inputCustomStyle={s.inputFont}
                    onBlur={onBlur}
                /> 
                : <button onClick={() => setIsEdit(true)} className={s.plus}></button>
            }
        </div>
    )
}