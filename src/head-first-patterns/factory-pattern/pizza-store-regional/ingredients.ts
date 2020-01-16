interface IPizzaIngredientFactory {
    createDough: () => Dough;
    createSauce: () => Sauce;
    createCheese: () => Cheese;
    createVeggies: (VeggieChoices) => Veggies;
    createPepperoni: () => Pepperoni;
    createClams: () => Clams;
}

export class Dough {}
export class NYCThinCrustDough extends Dough {}
export class ChicagoDeepDish extends Dough {}
export class CaliforniaSourDough extends Dough {}

export class Sauce {}
export class NYCMarinaraSauce extends Sauce {}
export class ChicagoSauce extends Sauce {}
export class CaliforniaSauce extends Sauce {}

export class Cheese {}
export class Reggiano extends Cheese {}
export class Mozzarella extends Cheese {}

export class Veggies {}
export class Olives extends Veggies {}
export class Garlic extends Veggies {}
export class Onion extends Veggies {}

export class Pepperoni {}

export class Clams {}

export enum VeggieChoices {
    OLIVES = "olives",
    GARLIC = "garlic",
    ONION = "onion",
    BASIL = "basil",
    BANANAPEPPERS = "banana peppers",
    GREENPEPPERS = "green peppers",
    ARTICHOKE = "artichoke",
}

export class PizzaIngredientFactory implements IPizzaIngredientFactory {
    constructor() {}

    public createDough(): Dough {
        return new Dough();
    }

    public createSauce(): Sauce {
        return new Sauce();
    }

    public createCheese(): Cheese {
        return new Cheese();
    }

    public createVeggies(choice: VeggieChoices): Veggies {
        if (choice === "olives") {
            return new Olives();
        }
        if (choice === "garlic") {
            return new Garlic();
        }
        if (choice === "onion") {
            return new Onion();
        }
    }

    public createPepperoni(): Pepperoni {
        return new Pepperoni();
    }

    public createClams(): Clams {
        return new Clams();
    }
}

export class NYCPizzaIngredientFactory implements IPizzaIngredientFactory {
    constructor() {}

    public createDough(): Dough {
        return new NYCThinCrustDough();
    }

    public createSauce(): Sauce {
        return new NYCMarinaraSauce();
    }

    public createCheese(): Cheese {
        return new Reggiano();
    }

    public createVeggies(): Veggies {
        return new Veggies();
    }

    public createPepperoni(): Pepperoni {
        return new Pepperoni();
    }

    public createClams(): Clams {
        return new Clams();
    }
}
