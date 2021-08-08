import { FocusEvent } from "react"

type InputProps = {
    isValid: boolean 
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    onKeyDown?: (e: React.KeyboardEvent) => void
    inputRef?: null | React.RefObject<HTMLInputElement>
    inputCustomStyle?: string
    onBlur?: (e?: FocusEvent<HTMLInputElement>) => void 
}

export const CustomInput = ({ isValid, onInput, onKeyDown, value, inputCustomStyle, inputRef, onBlur }: InputProps) => {
    return <span className={isValid ? 'inputCorrect' : 'inputIncorrect'}>
        <input value={value && value} 
            onInput={onInput} 
            onKeyDown={onKeyDown} 
            className={
                `${inputCustomStyle ? inputCustomStyle : ''} textInput ${isValid ? 'inputFocusCorrect' : 'inputFocusIncorrect'}`
            }
            onBlur={onBlur}
            ref={inputRef}
        />
    </span>
}