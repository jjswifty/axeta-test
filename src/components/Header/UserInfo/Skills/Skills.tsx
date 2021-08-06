import { useState } from "react"
import { useStoreon } from 'storeon/react'
import { Skill } from "../../../../interfaces/Skill"
import { isValueLetter } from "../../../../utils/regexUtils"

export const Skills = () => {

    const { dispatch, skills } = useStoreon('skills')
    const [isEdit, setIsEdit] = useState(false)
    const [newSkill, setNewSkill] = useState({
        skill: '',
        experience: 0
    } as Skill)

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isValueLetter(e.target.value)) e.preventDefault()
        else setNewSkill({
            skill: e.target.value,
            experience: 0
        })
    }

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && newSkill.skill.length > 0) {
            dispatch('skills/set/skill', {newSkill})
            setNewSkill({
                skill: '',
                experience: 0
            })
        }
    }

    return (
        <div>
            {
                skills.map((e: Skill, index: number) => {
                    return <div key={index} onClick={() => dispatch('skills/remove/skill', {index})}>{e.skill}</div>
                })
            }
            {
                isEdit ? <input value={newSkill.skill} onInput={onInput} onKeyDown={onKeyDown}/> 
                : <button onClick={() => setIsEdit(true)}>+</button>
            }
        </div>
    )
}