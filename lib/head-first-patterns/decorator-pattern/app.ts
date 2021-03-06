import {
    Shots,
    Size,
    Mocha,
    HouseBlend,
    Espresso,
    Beverage,
    SteamedMilk,
} from "./cafe-app";

const Blue: string = "\x1b[34m";
const Magenta: string = "\x1b[35m";
const Cyan: string = "\x1b[36m";
const Yellow: string = "\x1b[33m";
const Normal: string = "\x1b[0m";

const espresso = new Espresso(Shots.DOUBLE, Size.SMALL);
console.log(espresso._description, Yellow, "$" + espresso.cost(), Normal);

const cappucino = new SteamedMilk(espresso);
console.log(
    "Cappucino. Size: " + cappucino._size,
    cappucino._description,
    Yellow,
    "$" + cappucino.cost(),
    Normal
);

const cafeMocha = new Mocha(cappucino);
console.log(
    "Cafe mocha. Size: " + cafeMocha._size,
    cafeMocha._description,
    Yellow,
    "$" + cafeMocha.cost()
);
