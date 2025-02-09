console.log("Welcome to the main module")

import { createPlan } from "./plan.js";
import { createCorn } from "./seeds/corn.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant, usePlants } from "./field.js";



const yearlyPlan = createPlan();

// creating seed objects
const cornSeed = createCorn("corn", 180, 6);
console.log(cornSeed);

const asparagusSeed = createAsparagus("asparagus", 24, 4);
console.log(asparagusSeed);

const potatoSeed = createPotato("potato", 32, 2);
console.log(potatoSeed);

const soybeanSeed = createSoybean("soybean", 20, 4);
console.log(soybeanSeed);

const sunflowerSeed = createSunflower("sunflower", 380, 3);
console.log(sunflowerSeed);

const wheatSeed = createWheat("wheat", 380, 3);
console.log(wheatSeed);

// adding plants to the fieldPlants array
addPlant(cornSeed);
addPlant(asparagusSeed);

// returning fieldPlants array
const growingPlants = usePlants();
console.log(growingPlants);