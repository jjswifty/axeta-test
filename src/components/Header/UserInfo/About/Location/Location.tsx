import React, { useState } from "react"
import { useStoreon } from "storeon/react"
import { geocodeService } from "../../../../../services"
import { LocationEvents, LocationState } from "../../../../../store/location.module"
import { isValueLetter } from "../../../../../utils/regexUtils"
import s from './Location.module.sass'

export const Location = () => {

    const [location, setLocation] = useState('Portland, Oregon, USA')
    const { dispatch } = useStoreon<LocationState, LocationEvents>('location')
    const [isValid, setIsValid] = useState(true)

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isValueLetter(e.target.value)) setIsValid(false)
        else setIsValid(true)
        setLocation(e.target.value)
    }

    const onKeyDown = async (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (!isValueLetter(location)) return
            const coordinates = await geocodeService.geocode(location)
            if (!coordinates) setIsValid(false)
            else dispatch('location/set/location', {location: coordinates})
        }
    }

    return ( 
        <div className={s.wrapper}>
            <span className={`${!isValid && s.inputIncorrect}`}>
                <input value={location} 
                onInput={onInput} 
                onKeyDown={onKeyDown} 
                className={`${s.location} ${s.textInput}`}/>
            </span>
            {!isValid && <p className={s.errDesc}>Error Description</p>}
        </div>
        
    )
}