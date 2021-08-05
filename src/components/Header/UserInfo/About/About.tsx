import { useState } from "react"
import { isValueLetter } from "../../../../utils/regexUtils"

export const About = () => {

    const [name, setName] = useState('John Smith')

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isValueLetter(e.target.value)) e.preventDefault()
        else setName(e.target.value)
    }

    return (
        <div>
            <input value={name} onInput={onInput}/>
            
        </div>
    )
}