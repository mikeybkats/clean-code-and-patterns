import { Pizza, NYCStyleCheesePizza, ChicagoStyleCheesePizza } from "./pizza";

abstract class PizzaStore {
    protected abstract createPizza(type: string): Pizza;

    orderPizza(type: string): Pizza {
        const pizza: Pizza = this.createPizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}

export class NYCPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        if (type === "cheese") {
            return new NYCStyleCheesePizza();
        }
    }
}

export class ChicagoPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        if (type === "cheese") {
            return new ChicagoStyleCheesePizza();
        }
    }
}
