const fieldPlants = [];

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        seed.forEach(singleSeed => fieldPlants.push(singleSeed));
    } else {
        fieldPlants.push(seed);
    }
}

export const usePlants = () => {
    return fieldPlants;
}