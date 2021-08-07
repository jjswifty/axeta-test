export const isValueLetter = (value: string) => {
    return (/^([а-яё\s,\b]+|[a-z\s,\b]+)$/iu).test(value)
}