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
import { barn } from "./storageBarn.js";


// CREATE A PLAN
const yearlyPlan = createPlan();
console.log("yearlyPlan: ", yearlyPlan);

// PLANT THE SEEDS
plantSeeds(yearlyPlan);

// USE THE PLANTS
const growingPlants = usePlants();
console.log("growingPlants: ", growingPlants);

// Check if barn is empty before harvesting
console.log("isEmpty: " + barn.isEmpty());

// HARVEST THE PLANTS
const harvestedPlants = harvestPlants(growingPlants);
console.log("harvestedPlants: ", harvestedPlants);


// SELF ASSESSMENT 1 SECTION 
const harvestedPlantsHTML = catalog(harvestedPlants);
// console.log(harvestedPlantsHTML);
console.log(document.querySelector(".container"));

const containerElement = document.querySelector(".container");

if (containerElement) {
    containerElement.innerHTML = harvestedPlantsHTML;
} else {
    console.error("Element with class 'container' not found!");
}


// OPTIONAL CHALLENGES
// ORDERING THE HARVEST
alphabetize(harvestedPlants);
console.log("harvestedPlants: ", harvestedPlants);

// DISPLAY ONCE WITH QUANTITY
// When using this code the SELF ASSESSMENT 1 SECTION needs to be commented out
// const totals = plantTotals(harvestedPlants);
// console.log("totals", totals);

// console.log(document.querySelector(".container"));

// const containerElement = document.querySelector(".container");

// if (containerElement) {
//     containerElement.innerHTML = totals;
// } else {
//     console.error("Element with class 'container' not found!");
// }


// STORAGE BARN STACK
// NOTE: I invoked the barn object inside of harvester.js.  
//       that was my understanding according to the instructions.  Not sure if 
//       that was the desired implementation.
//       as to them being added to the barn "immediately" after being harvested.
//       Also, I added the id attribute to plants added to the barn from main.js.
const storageBarn1 = barn.contents();
console.log("storageBarn1: ", storageBarn1); 

const addedPlant = barn.push({ ...createAsparagus(), id: storageBarn1.length + 1 });
console.log("addedPlant: ", addedPlant);

const storageBarn2 = barn.contents();
console.log("storageBarn2: ", storageBarn2);

console.log("peek: " + barn.peek());

const removedPlant = barn.pop();
console.log("removedPlant: ", removedPlant);

console.log("peek: " + barn.peek());

console.log("isEmpty: " + barn.isEmpty());

const storageBarn3 = barn.contents();
console.log("storageBarn3: ", storageBarn3);