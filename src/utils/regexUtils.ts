export const isValueLetter = (value: string) => {
    return (/^([а-яё\s,\b]+|[a-z\s,\b]+)$/iu).test(value)
}

export const isValueNumber = (value: number) => {
    return (/^-?[0-9][0-9,.]*$/).test(value.toString())
}