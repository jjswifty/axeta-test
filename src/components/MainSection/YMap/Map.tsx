import { Map } from 'react-yandex-maps'
import { useStoreon } from 'storeon/react'
import { LocationEvents, LocationState } from '../../../store/location.module'

export const YMap = () => {

    const { location } = useStoreon<LocationState, LocationEvents>('location')

    return <Map state={{center: [location.latitude, location.longitude], zoom: 10}} />
}