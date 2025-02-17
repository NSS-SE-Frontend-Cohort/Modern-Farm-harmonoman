export const alphabetize = (harvestedPlants) => {
    harvestedPlants.sort((a,b) => a.type.localeCompare(b.type, 'en', {sensitivity: 'base'}));
}