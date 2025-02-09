import { createAsparagus } from "./seeds/asparagus.js"
import { addPlant } from "./field.js"

export const plantSeeds = (yearlyPlan) => {
    yearlyPlan.forEach(row => {
        row.forEach(plant => {
            if (plant === "Asparagus") {
                const seed = createAsparagus("Asparagus", 24, 4);
                addPlant(seed);
            }
        })
    });
}