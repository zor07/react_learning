export const maxLengthCreator = (maxlength) => value => {
    if (value && value.length > maxlength) return `Max length is ${maxlength}`
    return undefined
}

export const required = value => {
    if (value) return undefined;
    return 'Field is required'
}
