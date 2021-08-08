import { useState } from "react"
import { isValueLetter } from "../../../../utils/regexUtils"
import { Location } from "./Location"
import s from './About.module.sass'
import flag from './../../../../assets/img/flag.png'
import { CustomInput } from "../../../common/CustomInput"

export const About = () => {

    const [name, setName] = useState('John Smith')
    const [isValid, setIsValid] = useState(true)
    
    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isValueLetter(e.target.value)) setIsValid(false)
        else setIsValid(true)
        
        setName(e.target.value)
    }

    return (
        <div className={s.wrapper}>
            <CustomInput inputCustomStyle={s.name}
                isValid={isValid}
                value={name} 
                onInput={onInput} 
            />
            <Location />
            <div className={s.language}>
                <img src={flag} alt="English Flag"/>
                <p>English</p>
            </div>
        </div>
    )
}