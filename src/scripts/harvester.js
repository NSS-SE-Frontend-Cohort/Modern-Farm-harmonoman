import { barn } from "./storageBarn.js";

export const harvestPlants = (plants) => {
    const harvestedPlants = []
    let idNumber = 1;
    
    plants.forEach(({ type, output, ...rest }) => {
        // Check if plant is corn and if so divide output in half
        if (type === "Corn") {
            for (let i = 0; i < output / 2; i++) {
                const harvestedCorn = { type, ...rest, output, id: idNumber++ }
                harvestedPlants.push(harvestedCorn);
                barn.push(harvestedCorn);
            }
        } else {
            for (let i = 0; i < output; i++) {
                const harvestedPlant = { type, ...rest, output, id: idNumber++ }
                harvestedPlants.push(harvestedPlant);
                barn.push(harvestedPlant);
            }
        }
    });

    return harvestedPlants;
}