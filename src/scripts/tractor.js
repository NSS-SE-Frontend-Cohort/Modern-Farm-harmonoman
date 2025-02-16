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
                addPlant(createCorn());
            }
            if (plant === "Asparagus") {
                addPlant(createAsparagus());
            }
            if (plant === "Potato") {
                addPlant(createPotato());
            }
            if (plant === "Soybean") {
                addPlant(createSoybean());
            }
            if (plant === "Sunflower") {
                addPlant(createSunflower());
            }
            if (plant === "Wheat") {
                addPlant(createWheat());
            }
        })
    });
}