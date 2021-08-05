import { useState, SyntheticEvent } from "react"

export const About = () => {

    const [name, setName] = useState('John Smith')

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!(/^[a-zA-Z\s]*$/).test(e.target.value)) e.preventDefault()
        else setName(e.target.value)
    }

    return (
        <div>
            <input value={name} onInput={onInput}/>
        </div>
    )
}