type InputProps = {
    isValid: boolean 
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    onKeyDown?: (e: React.KeyboardEvent) => void
    inputRef?: null | React.RefObject<HTMLInputElement>
    inputCustomStyle?: string
}

export const CustomInput = ({ isValid, onInput, onKeyDown, value, inputCustomStyle, inputRef }: InputProps) => {
    return <span className={isValid ? 'inputCorrect' : 'inputIncorrect'}>
        <input value={value && value} 
            onInput={onInput} 
            onKeyDown={onKeyDown} 
            className={
                `${inputCustomStyle ? inputCustomStyle : ''} textInput ${isValid ? 'inputFocusCorrect' : 'inputFocusIncorrect'}`
            }
            ref={inputRef}
        />
    </span>
}