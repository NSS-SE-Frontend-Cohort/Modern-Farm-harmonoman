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
import { plantTotals } from "./plantTotals.js";


// CREATE A PLAN
const yearlyPlan = createPlan();
console.log("yearlyPlan");
console.log(yearlyPlan);

// PLANT THE SEEDS
plantSeeds(yearlyPlan);

// USE THE PLANTS
const growingPlants = usePlants();
console.log("growingPlants");
console.log(growingPlants);

// HARVEST THE PLANTS
const harvestedPlants = harvestPlants(growingPlants);
console.log("harvestedPlants");
console.log(harvestedPlants);


// SELF ASSESSMENT 1 SECTION 
const harvestedFoodHTML = catalog(harvestedPlants);
console.log(harvestedFoodHTML);
console.log(document.querySelector(".container"));

const containerElement = document.querySelector(".container");

if (containerElement) {
    containerElement.innerHTML = harvestedFoodHTML;
} else {
    console.error("Element with class 'container' not found!");
}

// OPTIONAL CHALLENGES
// ORDERING THE HARVEST
alphabetize(harvestedPlants);
console.log(harvestedPlants);

// DISPLAY ONCE WITH QUANTITY
// const totals = plantTotals(harvestedPlants);
// console.log("totals");
// console.log(totals);

// console.log(document.querySelector(".container"));

// const containerElement = document.querySelector(".container");

// if (containerElement) {
//     containerElement.innerHTML = totals;
// } else {
//     console.error("Element with class 'container' not found!");
// }

// // CREATING SEED OBJECTS
// const cornSeed = createCorn();
// console.log("cornSeed");
// console.log(cornSeed);

// const asparagusSeed = createAsparagus();
// console.log("asparagusSeed");
// console.log(asparagusSeed);

// const potatoSeed = createPotato();
// console.log("potatoSeed");
// console.log(potatoSeed);

// const soybeanSeed = createSoybean();
// console.log("soybeanSeed");
// console.log(soybeanSeed);

// const sunflowerSeed = createSunflower();
// console.log("sunflowerSeed");
// console.log(sunflowerSeed);

// const wheatSeed = createWheat();
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