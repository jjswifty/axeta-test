import { useState } from "react"
import { isValueLetter } from "../../../../../utils/regexUtils"

export const Location = () => {

    const [location, setLocation] = useState('Portland, Oregon, USA')

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isValueLetter(e.target.value)) e.preventDefault()
        else setLocation(e.target.value)
        console.log(e.target.value)
    }

    return (
        <input value={location} onInput={onInput}/>
    )
}