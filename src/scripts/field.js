const growingPlants = [];

export const addPlant = (seed) => {
    // check to see if seed is a corn array or not
    if (Array.isArray(seed)) {
        seed.forEach(singleSeed => growingPlants.push(singleSeed));
    } else {
        growingPlants.push(seed);
    }
}

export const usePlants = () => {
    return growingPlants;
}