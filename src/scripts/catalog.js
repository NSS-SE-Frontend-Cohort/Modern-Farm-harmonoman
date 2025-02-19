export const catalog = (harvestedFood) => {
    const harvestedFoodHTML = harvestedFood.map(({ emoji }) => {
        return `
            <section class="plant">${emoji}</section>
        `;

    }).join("");

    return harvestedFoodHTML;
} 