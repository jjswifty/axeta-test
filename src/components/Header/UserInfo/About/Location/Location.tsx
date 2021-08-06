import React, { useState } from "react"
import { geocodeService } from "../../../../../services"
import { isValueLetter } from "../../../../../utils/regexUtils"

export const Location = () => {

    const [location, setLocation] = useState('Portland, Oregon, USA')

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isValueLetter(e.target.value)) e.preventDefault()
        else setLocation(e.target.value)
    }

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') geocodeService.geocode(location)
    }

    return <input value={location} onInput={onInput} onKeyDown={onKeyDown}/>
}