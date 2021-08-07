import { useState } from "react"
import { isValueLetter } from "../../../../utils/regexUtils"

export const About = () => {

    const [name, setName] = useState('John Smith')
    const [isValid, setIsValid] = useState(true)
    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isValueLetter(e.target.value)) setIsValid(false)
        else setIsValid(true)
        
        setName(e.target.value)
    }

    return (
        <div>
            <input value={name} onInput={onInput} style={{backgroundColor: isValid ? 'green' : 'red'}}/>
        </div>
    )
}