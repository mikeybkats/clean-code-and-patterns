"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pizza_1 = require("./pizza");
const Ingredients = require("./ingredients");
class PizzaStore {
    orderPizza(type) {
        const pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}
// this is the product factory it makes pizzas (product)
// NYCPizzaStore is a client of the abstract factory
class NYCPizzaStore extends PizzaStore {
    createPizza(type) {
        let pizza = null;
        // each specific factory has it's own specific ingredient factory
        const ingredientFactory = new Ingredients.NYCPizzaIngredientFactory();
        if (type === "cheese") {
            pizza = new pizza_1.CheesePizza(ingredientFactory);
        }
        if (type === "veggie") {
            pizza = new pizza_1.VeggiePizza(ingredientFactory);
        }
        else {
            pizza = new pizza_1.CheesePizza(ingredientFactory);
        }
        return pizza;
    }
}
exports.NYCPizzaStore = NYCPizzaStore;
// export class ChicagoPizzaStore extends PizzaStore {
// }
// export class CaliforniaPizzaStore extends PizzaStore {
// }
