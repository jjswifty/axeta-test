import { Map } from 'react-yandex-maps'
import { useStoreon } from 'storeon/react'
import { LocationEvents, LocationState } from '../../../store/location.module'
import s from './YMap.module.sass'

export const YMap = () => {

    const { location } = useStoreon<LocationState, LocationEvents>('location')

    return <div className={s.wrapper}>
        <Map state={{center: [location.latitude, location.longitude], zoom: 10}} width="100%" height="100%"/>
    </div>
}