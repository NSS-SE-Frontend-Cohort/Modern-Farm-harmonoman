export const plantTotals = (plants) => {
    // Create a map to track which plants and how many
    const plantMap = new Map();

    plants.forEach(({ type }) => {
        if(plantMap.has(type)) {
            plantMap.set(type, plantMap.get(type) + 1)
        } else {
            plantMap.set(type, 1);
        }
    });

    // Head of the HTML string
    const tableHeadHTML = `
        <table>
            <thead>
                <tr>
                    <th>Food</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
        `;

    // create the HTML for each plant and it's quantity
    const plantDataHTML = Array.from(plantMap.entries()).map(([type, quantity]) => {
        return `
        <tr>
            <td>${type}</td>
            <td>${quantity}</td>
        </tr>
        `;
    }).join("");

    // Tail of the HTML string
    const tableTailHTML = `
            </tbody>
        </table>
    `;

    return tableHeadHTML + plantDataHTML + tableTailHTML;
}

