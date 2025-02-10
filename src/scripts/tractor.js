import { createCorn } from "./seeds/corn.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

export const plantSeeds = (yearlyPlan) => {
    yearlyPlan.forEach(row => {
        row.forEach(plant => {
            if (plant === "Corn") {
                addPlant(createCorn("Corn", 180, 6));
            }
            if (plant === "Asparagus") {
                addPlant(createAsparagus("Asparagus", 24, 4));
            }
            if (plant === "Potato") {
                addPlant(createPotato("Potato", 32, 2));
            }
            if (plant === "Soybean") {
                addPlant(createSoybean("Soybean", 20, 4));
            }
            if (plant === "Sunflower") {
                addPlant(createSunflower("Sunflower", 380, 3));
            }
            if (plant === "Wheat") {
                addPlant(createWheat("Wheat", 230, 6));
            }
        })
    });
}