import { useState } from 'react'
import { Map } from 'react-yandex-maps'
import { useStoreon } from 'storeon/react'
import { LocationEvents, LocationState } from '../../../store/location.module'

export const YMap = () => {

    //const [position, setPosition] = useState({
    //    latitude: null,
    //    longitude: null
    //})

    const { dispatch, location } = useStoreon<LocationState, LocationEvents>('location')
    console.log(location, dispatch)


    return <Map 
        //state={{center: [location.latitude, location.longitude], zoom: 10}}  
        defaultState={{ center: [45.523064, -122.676483], zoom: 10 }}/>
}