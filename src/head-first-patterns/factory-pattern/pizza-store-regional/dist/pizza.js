"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pizza {
    constructor() {
        this.toppings = [];
    }
    prepare() {
        console.log(`Preparing ${this.name}`);
        this.toppings.forEach(topping => {
            console.log(`Adding ${topping}`);
        });
    }
    bake() {
        console.log("Baking pizza for 5 minutes in charcoal oven at 800 degrees F.");
    }
    cut() {
        console.log("Cutting pizza.");
    }
    box() {
        console.log("Putting pizza in box.");
    }
    getName() {
        return this.name;
    }
}
exports.Pizza = Pizza;
// each differnt style of pizza gets it's own class
class NYCStyleCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = "NY style sauce and cheese pizza.";
        this.dough = "Thin crust dough.";
        this.sauce = "Marinara sauce.";
        this.toppings.push("Grated Reggiano cheese.");
    }
}
exports.NYCStyleCheesePizza = NYCStyleCheesePizza;
class ChicagoStyleCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = "Chicago style deep dish cheese pizza.";
        this.dough = "Extra thick crust dough.";
        this.sauce = "Plum tomato sauce.";
        this.toppings.push("Shredded mozzarella cheese.");
    }
    cut() {
        console.log("Cutting pizza into square slices.");
    }
    bake() {
        console.log("Baking pizza for 25 minutes in brick oven at 350 degrees F.");
    }
}
exports.ChicagoStyleCheesePizza = ChicagoStyleCheesePizza;
