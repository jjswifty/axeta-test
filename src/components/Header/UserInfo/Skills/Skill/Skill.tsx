import { useStoreon } from "storeon/react"
import s from './Skill.module.sass'

type SkillProps = {
    skill: string
    index: number
}

export const Skill = ({ skill, index }: SkillProps) => {
    const { dispatch } = useStoreon('skills')
    return <div className={s.wrapper}>
        <p>{skill}</p>
        <span onClick={() => dispatch('skills/remove/skill', {index})}></span>
    </div>
}