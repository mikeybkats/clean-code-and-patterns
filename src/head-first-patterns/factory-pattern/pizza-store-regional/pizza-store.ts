import { Pizza, CheesePizza, VeggiePizza } from "./pizza";
import * as Ingredients from "./ingredients";

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
        let pizza = null;
        const ingredientFactory = new Ingredients.NYCPizzaIngredientFactory();

        if (type === "cheese") {
            pizza = new CheesePizza(ingredientFactory);
        }
        if (type === "veggie") {
            pizza = new VeggiePizza(ingredientFactory);
        } else {
            pizza = new CheesePizza(ingredientFactory);
        }
        return pizza;
    }
}

// export class ChicagoPizzaStore extends PizzaStore {
// }

// export class CaliforniaPizzaStore extends PizzaStore {
// }
