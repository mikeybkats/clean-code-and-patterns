"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ingredients = require("./ingredients");
class Pizza {
    bake() {
        console.log("Baking pizza for 5 minutes in charcoal oven at 800 degrees F.");
    }
    cut() {
        console.log("Cutting pizza.");
    }
    box() {
        console.log("Putting pizza in box.");
    }
    get _name() {
        return this.name;
    }
    set _name(name) {
        this.name = name;
    }
}
exports.Pizza = Pizza;
// each differnt style of pizza doesn't need its own class anymore. now we can pass in a
// PizzaIngredientsFactory when we create the cheese pizza. this allows us to specify what
// kind of pizza we want.
class CheesePizza extends Pizza {
    constructor(pizza) {
        super();
        this.pizzaIngredientFactory = pizza;
    }
    prepare() {
        this.dough = this.pizzaIngredientFactory.createDough();
        this.cheese = this.pizzaIngredientFactory.createCheese();
        this.sauce = this.pizzaIngredientFactory.createSauce();
    }
}
exports.CheesePizza = CheesePizza;
class VeggiePizza extends Pizza {
    constructor(pizza) {
        super();
        this.pizzaIngredientFactory = pizza;
    }
    prepare() {
        this.dough = this.pizzaIngredientFactory.createDough();
        this.cheese = this.pizzaIngredientFactory.createCheese();
        this.sauce = this.pizzaIngredientFactory.createSauce();
        this.veggies.push(this.pizzaIngredientFactory.createVeggies(Ingredients.VeggieChoices.GARLIC));
        this.veggies.push(this.pizzaIngredientFactory.createVeggies(Ingredients.VeggieChoices.OLIVES));
        this.veggies.push(this.pizzaIngredientFactory.createVeggies(Ingredients.VeggieChoices.ONION));
        this.veggies.push(this.pizzaIngredientFactory.createVeggies(Ingredients.VeggieChoices.GREENPEPPERS));
    }
}
exports.VeggiePizza = VeggiePizza;
