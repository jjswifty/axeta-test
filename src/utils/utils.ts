export const generatePseudoRandomId = () => {
    // interval - 0-1000
    let rand = 1 - 0.5 + Math.random() * (1000 - 1 + 1);
    return Math.round(rand);
}