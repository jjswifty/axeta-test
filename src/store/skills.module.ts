import { StoreonModule } from 'storeon'

export type SkillsState = {
    skills: string[]
}

export type SkillsEvents = {
    'skills/set/skill': {
        newSkill: string
    }
    'skills/remove/skill': {
        index: number
    }
}

export const skillsModule: StoreonModule<SkillsState, SkillsEvents> = store => {

    store.on('@init', () => ({
        skills: ['PHP', 'Ruby', 'Java Script'],
    }))

    store.on('skills/set/skill', (state, event) => ({
        skills: [
            ...state.skills,
            event.newSkill
        ]
    }))

    store.on('skills/remove/skill', (state, event) => ({
        skills: state.skills.filter((e, i) => i !== event.index)
    }))

} 