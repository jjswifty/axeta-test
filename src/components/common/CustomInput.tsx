import { useState } from "react"
import { useEffect } from "react"

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

    useEffect(() => {
        setValue(value)
    }, [value])

    const getSpanClassName = () => {
        if (isValid === null) return ''
        return isValid ? 'inputCorrect' : 'inputIncorrect'
    }

    const getInputClassName = () => {
        if (isValid === null) return `${inputCustomStyle ? inputCustomStyle : ''} textInput`
        return `${inputCustomStyle ? inputCustomStyle : ''} textInput ${isValid ? 'inputFocusCorrect' : 'inputFocusIncorrect'}`
    }

    return <span className={getSpanClassName()}>
        <input value={inputValue} 
            onInput={onInput} 
            onKeyDown={onKeyDown} 
            className={getInputClassName()}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={inputRef}
        />
    </span>
}