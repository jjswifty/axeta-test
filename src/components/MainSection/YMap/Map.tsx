import { useState } from 'react'
import { Map } from 'react-yandex-maps'

export const YMap = () => {

    const [position, setPosition] = useState({
        latitude: null,
        longitude: null
    })

    return <Map defaultState={{ center: [45.523064, -122.676483], zoom: 10 }}/>
}