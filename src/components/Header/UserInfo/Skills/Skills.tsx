import { useState } from "react"
import { useStoreon } from 'storeon/react'
import { isValueLetter } from "../../../../utils/regexUtils"


export const Skills = () => {

    const { dispatch, skills } = useStoreon('skills')
    const [isEdit, setIsEdit] = useState(false)
    const [newSkill, setNewSkill] = useState('')

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isValueLetter(e.target.value)) e.preventDefault()
        else setNewSkill(e.target.value)
    }

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && newSkill.length > 0) {
            dispatch('skills/set/skill', {newSkill})
            setNewSkill('')
        }
    }

    return (
        <div>
            {
                skills.map((skill: string, index: number) => {
                    return <div key={index} onClick={() => dispatch('skills/remove/skill', {index})}>{skill}</div>
                })
            }
            {
                isEdit ? <input value={newSkill} onInput={onInput} onKeyDown={onKeyDown}/> 
                : <button onClick={() => setIsEdit(true)}>+</button>
            }
        </div>
    )
}