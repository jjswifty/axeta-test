import { Skill } from './../interfaces/Skill';
import { StoreonModule } from 'storeon'

export type SkillsState = {
    skills: Skill[]
}

export type SkillsEvents = {
    'skills/set/skill': {
        newSkill: Skill
    }
    'skills/remove/skill': {
        index: number
    }
}

export const skillsModule: StoreonModule<SkillsState, SkillsEvents> = store => {

    store.on('@init', () => ({
        skills: [
            {
                skill: 'PHP',
                experience: 6,
            }, 
            {
                skill: 'Ruby',
                experience: 2,
            }, 
            {
                skill: 'Java Script',
                experience: 4.5
            }
        ],
    }))

    store.on('skills/set/skill', (state, event) => ({
        skills: [
            ...state.skills,
            event.newSkill
        ]
    }))

    store.on('skills/remove/skill', (state, event) => ({
        skills: state.skills.filter((_, i) => i !== event.index)
    }))

} 