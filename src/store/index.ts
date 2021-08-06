import { createStoreon } from 'storeon'
import { SkillsEvents, skillsModule, SkillsState } from './skills.module'

export type StoreState = SkillsState

export type StoreEvents = SkillsEvents

const store = createStoreon<StoreState, StoreEvents>([skillsModule])

export {
    store,
    skillsModule,
}