"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cafe_app_1 = require("./cafe-app");
const Blue = "\x1b[34m";
const Magenta = "\x1b[35m";
const Cyan = "\x1b[36m";
const Yellow = "\x1b[33m";
const Normal = "\x1b[0m";
const espresso = new cafe_app_1.Espresso(cafe_app_1.Shots.DOUBLE, cafe_app_1.Size.SMALL);
console.log(espresso._description, Yellow, "$" + espresso.cost(), Normal);
const cappucino = new cafe_app_1.SteamedMilk(espresso);
console.log("Cappucino. Size: " + cappucino._size, cappucino._description, Yellow, "$" + cappucino.cost(), Normal);
const cafeMocha = new cafe_app_1.Mocha(cappucino);
console.log("Cafe mocha. Size: " + cafeMocha._size, cafeMocha._description, Yellow, "$" + cafeMocha.cost());
