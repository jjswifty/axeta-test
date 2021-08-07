import React, { useState } from "react"
import { useStoreon } from "storeon/react"
import { geocodeService } from "../../../../../services"
import { LocationEvents, LocationState } from "../../../../../store/location.module"
import { isValueLetter } from "../../../../../utils/regexUtils"

export const Location = () => {

    const [location, setLocation] = useState('Portland, Oregon, USA')
    const { dispatch } = useStoreon<LocationState, LocationEvents>('location')

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value)
    }

    const onKeyDown = async (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (!isValueLetter(location)) return
            const coordinates = await geocodeService.geocode(location)
            dispatch('location/set/location', {location: coordinates})
        }
    }

    return <input value={location} 
        onInput={onInput} 
        onKeyDown={onKeyDown}/>
}