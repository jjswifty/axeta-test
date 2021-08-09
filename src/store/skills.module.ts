import { ISkill } from './../interfaces/Skill';
import { StoreonModule } from 'storeon'

export type SkillsState = {
    skills: ISkill[]
}

export type SkillsEvents = {
    'skills/set/skill': {
        newSkill: ISkill
    }
    'skills/remove/skill': {
        index: number
    }
    'skills/change/skill': {
        newSkill: ISkill
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
                skill: 'Java Script',
                experience: 4.5
            },
            {
                skill: 'Ruby',
                experience: 2,
            }, 
        ],
    }))

    store.on('skills/set/skill', (state, event) => ({
        skills: [
            ...state.skills,
            event.newSkill
        ].sort((a, b) => b.experience - a.experience)
    }))

    store.on('skills/remove/skill', (state, event) => ({
        skills: state.skills.filter((_, i) => i !== event.index)
    }))

    store.on('skills/change/skill', (state, event) => {
        state.skills[event.index] = event.newSkill
        const sortedState = state.skills.sort((a, b) => b.experience - a.experience)
        //console.log(sortedState, 'sortedState')
        return {
            skills: [...sortedState]
        }
    })

} 