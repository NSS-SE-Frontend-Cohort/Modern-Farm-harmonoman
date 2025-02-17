console.log("Welcome to the main module")

import { createPlan } from "./plan.js";
import { createCorn } from "./seeds/corn.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant, usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js";
import { alphabetize } from "./alphabetize.js";



const yearlyPlan = createPlan();
console.log("yearlyPlan");
console.log(yearlyPlan);

plantSeeds(yearlyPlan);

const growingPlants = usePlants();
console.log("growingPlants");
console.log(growingPlants);

const harvestedPlants = harvestPlants(growingPlants);
console.log("harvestedPlants");
// console.log(harvestedPlants);
alphabetize(harvestedPlants);
console.log(harvestedPlants);

const harvestedFoodHTML = catalog(harvestedPlants);
console.log(harvestedFoodHTML);
console.log(document.querySelector(".container"));

const containerElement = document.querySelector(".container");

if (containerElement) {
    containerElement.innerHTML = harvestedFoodHTML;
} else {
    console.error("Element with class 'container' not found!");
}

// // CREATING SEED OBJECTS
// const cornSeed = createCorn("corn", 180, 6);
// console.log("cornSeed");
// console.log(cornSeed);

// const asparagusSeed = createAsparagus("asparagus", 24, 4);
// console.log("asparagusSeed");
// console.log(asparagusSeed);

// const potatoSeed = createPotato("potato", 32, 2);
// console.log("potatoSeed");
// console.log(potatoSeed);

// const soybeanSeed = createSoybean("soybean", 20, 4);
// console.log("soybeanSeed");
// console.log(soybeanSeed);

// const sunflowerSeed = createSunflower("sunflower", 380, 3);
// console.log("sunflowerSeed");
// console.log(sunflowerSeed);

// const wheatSeed = createWheat("wheat", 230, 6);
// console.log("wheatSeed");
// console.log(wheatSeed);

// // ADDING PLANTS TO THE fieldPlants ARRAY
// // addPlant(cornSeed);
// // addPlant(asparagusSeed);
// if (asparagusSeed.type === "asparagus") {
//     addPlant(asparagusSeed);
// }

// // // RETURNING fieldPlants ARRAY
// const growingPlants = usePlants();
// console.log("growingPlants");
// console.log(growingPlants);