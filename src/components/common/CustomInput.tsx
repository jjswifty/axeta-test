import { useState } from "react"
import { useEffect } from "react"

type InputProps = {
    isValid?: boolean 
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

    return <span className={isValid ? isValid ? 'inputCorrect' : 'inputIncorrect' : ''}>
        <input value={inputValue} 
            onInput={onInput} 
            onKeyDown={onKeyDown} 
            className={
                `${inputCustomStyle ? inputCustomStyle : ''} textInput ${isValid ? isValid ? 'inputFocusCorrect' : 'inputFocusIncorrect' : ''}`
            }
            onFocus={onFocus}
            onBlur={onBlur}
            ref={inputRef}
        />
    </span>
}