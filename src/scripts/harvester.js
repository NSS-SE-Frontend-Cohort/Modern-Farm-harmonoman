export const harvestPlants = (plants) => {
    const harvestedPlants = []
    let idNumber = 1;
    
    plants.forEach(({ type, output, ...rest }) => {
        // Check if plant is corn and if so divide output in half
        if (type === "Corn") {
            for (let i = 0; i < output / 2; i++) {
                harvestedPlants.push({ type: type, ...rest, output: output, id: idNumber });
                idNumber += 1;
            }
        } else {
            for (let i = 0; i < output; i++) {
                harvestedPlants.push({ type: type, ...rest, output: output, id: idNumber });
                idNumber += 1;
            }
        }
    });

    return harvestedPlants;
}