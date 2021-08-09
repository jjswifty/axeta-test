import { useState } from "react"
import { useEffect } from "react"
import { generatePseudoRandomId } from "../../utils/utils"

type InputProps = {
    isValid: boolean | null
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    onKeyDown?: (e: React.KeyboardEvent) => void
    inputRef?: null | React.RefObject<HTMLInputElement>
    inputCustomStyle?: string
    onBlur?: (e?: React.FocusEvent<HTMLInputElement>) => void 
    onFocus?: (e?: React.FocusEvent<HTMLInputElement>) => void 
}

export const CustomInput = ({ isValid, onInput, onKeyDown, value, inputCustomStyle, inputRef, onBlur, onFocus }: InputProps) => {

    const [inputValue, setValue] = useState(value)
    const randomId = generatePseudoRandomId().toString()

    useEffect(() => {
        setValue(value)
    }, [value])

    const isValidNullStatus = isValid === null

    const getSpanClassName = () => {
        if (isValidNullStatus) return ''
        return isValid ? 'inputCorrect' : 'inputIncorrect'
    }

    const getInputClassName = () => {
        if (isValidNullStatus) return `${inputCustomStyle ? inputCustomStyle : ''} textInput`
        return `${inputCustomStyle ? inputCustomStyle : ''} textInput ${isValid ? 'inputFocusCorrect' : 'inputFocusIncorrect'}`
    }

    const errorDesc = () => {
        if (isValidNullStatus) return 
        return isValid ? '' : <label id={randomId} className="errDesc"></label> 
    }


    return <div style={{display: 'flex', alignItems: 'center', width: 'fit-content'}}> 
        <span className={getSpanClassName()} >
            <input name={randomId}
                value={inputValue} 
                onInput={onInput} 
                onKeyDown={onKeyDown} 
                className={getInputClassName()}
                onFocus={onFocus}
                onBlur={onBlur}
                ref={inputRef}
                style={{}} 
            />
        </span>
        {errorDesc()}
    </div>
}