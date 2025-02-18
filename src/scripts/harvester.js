export const harvestPlants = (plants) => {
    const harvestedPlants = []
    let idNumber = 1;
    
    plants.forEach(plant => {
        // Check if plant is corn and if so divide output in half
        if (plant.type === "Corn") {
            for (let i = 0; i < plant.output / 2; i++) {
                harvestedPlants.push({ ...plant, id: idNumber });
                idNumber += 1;
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                harvestedPlants.push({ ...plant, id: idNumber });
                idNumber += 1;
            }
        }
    });

    return harvestedPlants;
}