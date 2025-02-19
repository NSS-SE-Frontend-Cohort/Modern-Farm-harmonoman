export const catalog = (harvestedPlants) => {
    const harvestedPlantsHTML = harvestedPlants.map(({ emoji }) => {
        return `
            <section class="plant">${emoji}</section>
        `;

    }).join("");

    return harvestedPlantsHTML;
} 