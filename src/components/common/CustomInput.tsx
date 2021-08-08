type InputProps = {
    isValid: boolean 
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyDown?: (e: React.KeyboardEvent) => void
    value: string
    inputCustomStyle?: string
}

export const CustomInput = ({ isValid, onInput, onKeyDown, value, inputCustomStyle }: InputProps) => {
    return <span className={isValid ? 'inputCorrect' : 'inputIncorrect'}>
        <input value={value && value} 
            onInput={onInput} 
            onKeyDown={onKeyDown} 
            className={`${inputCustomStyle} textInput ${isValid ? 'inputFocusCorrect' : 'inputFocusIncorrect'}`}
        />
    </span>
}