const harvestedSeeds = []

export const harvestPlants = (plants) => {
    plants.forEach(plant => {
        // check if plant is corn and if so divide output in half
        if (plant.type === "Corn") {
            for (let i = 0; i < plant.output / 2; i++) {
                harvestedSeeds.push(plant);
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                harvestedSeeds.push(plant);
            }
        }
    });

    return harvestedSeeds;
}