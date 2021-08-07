import { LocationState, LocationEvents, locationModule } from './location.module';
import { createStoreon } from 'storeon'
import { SkillsEvents, skillsModule, SkillsState } from './skills.module'

export type StoreState = SkillsState &
    LocationState

export type StoreEvents = SkillsEvents &
    LocationEvents

const store = createStoreon<StoreState, StoreEvents>([skillsModule, locationModule])

export {
    store,
    skillsModule,
    locationModule,
}