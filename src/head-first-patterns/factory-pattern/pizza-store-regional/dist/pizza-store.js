"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pizza_1 = require("./pizza");
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
class NYCPizzaStore extends PizzaStore {
    createPizza(type) {
        if (type === "cheese") {
            return new pizza_1.NYCStyleCheesePizza();
        }
    }
}
exports.NYCPizzaStore = NYCPizzaStore;
class ChicagoPizzaStore extends PizzaStore {
    createPizza(type) {
        if (type === "cheese") {
            return new pizza_1.ChicagoStyleCheesePizza();
        }
    }
}
exports.ChicagoPizzaStore = ChicagoPizzaStore;
