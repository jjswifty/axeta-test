import { Location } from './../interfaces/Location'
import { StoreonModule } from 'storeon'

export type LocationState = {
    location: Location
}

export type LocationEvents = {
    'location/set/location': {
        location: Location
    }
}

export const locationModule: StoreonModule<LocationState, LocationEvents> = store => {

    store.on('@init', () => ({
        location: {
            latitude: 45.523064,
            longitude: -122.676483,
        }
    }))

    store.on('location/set/location', (state, event) => ({
        location: event.location
    }))

}