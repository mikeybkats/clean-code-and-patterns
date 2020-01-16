import * as Ingredients from "./ingredients";

export abstract class Pizza {
    private name: string;

    dough: Ingredients.Dough;
    sauce: Ingredients.Sauce;
    cheese: Ingredients.Cheese;
    veggies: Ingredients.Veggies[];
    pepperoni: Ingredients.Pepperoni;
    clams: Ingredients.Clams;

    // prepare is where we collect the ingredients using the ingredients factory
    abstract prepare(): void;

    bake(): void {
        console.log(
            "Baking pizza for 5 minutes in charcoal oven at 800 degrees F."
        );
    }
    cut(): void {
        console.log("Cutting pizza.");
    }
    box(): void {
        console.log("Putting pizza in box.");
    }

    public get _name(): string {
        return this.name;
    }

    public set _name(name: string) {
        this.name = name;
    }
}

// each differnt style of pizza doesn't need its own class anymore. now we can pass in a
// PizzaIngredientsFactory when we create the cheese pizza. this allows us to specify what
// kind of pizza we want.
export class CheesePizza extends Pizza {
    pizzaIngredientFactory: Ingredients.PizzaIngredientFactory;

    constructor(pizza: Ingredients.PizzaIngredientFactory) {
        super();
        this.pizzaIngredientFactory = pizza;
    }

    prepare() {
        this.dough = this.pizzaIngredientFactory.createDough();
        this.cheese = this.pizzaIngredientFactory.createCheese();
        this.sauce = this.pizzaIngredientFactory.createSauce();
    }
}

export class VeggiePizza extends Pizza {
    pizzaIngredientFactory: Ingredients.PizzaIngredientFactory;

    constructor(pizza: Ingredients.PizzaIngredientFactory) {
        super();
        this.pizzaIngredientFactory = pizza;
    }

    prepare() {
        this.dough = this.pizzaIngredientFactory.createDough();
        this.cheese = this.pizzaIngredientFactory.createCheese();
        this.sauce = this.pizzaIngredientFactory.createSauce();
        this.veggies.push(
            this.pizzaIngredientFactory.createVeggies(
                Ingredients.VeggieChoices.GARLIC
            )
        );
        this.veggies.push(
            this.pizzaIngredientFactory.createVeggies(
                Ingredients.VeggieChoices.OLIVES
            )
        );
        this.veggies.push(
            this.pizzaIngredientFactory.createVeggies(
                Ingredients.VeggieChoices.ONION
            )
        );
        this.veggies.push(
            this.pizzaIngredientFactory.createVeggies(
                Ingredients.VeggieChoices.GREENPEPPERS
            )
        );
    }
}
