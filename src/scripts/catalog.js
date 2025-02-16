export const catalog = (harvestedFood) => {
    const harvestedFoodHTML = harvestedFood.map(plant => {
        return `
            <section class="plant">${plant.type}</section>
        `;

    }).join("");

    return harvestedFoodHTML;
} 