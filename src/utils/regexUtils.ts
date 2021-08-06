export const isValueLetter = (value: string) => {
    return (/^([а-яё\s,]+|[a-z\s,]+)$/iu).test(value)
}