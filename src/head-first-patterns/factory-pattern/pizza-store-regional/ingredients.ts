interface IPizzaIngredientFactory {
    createDough: () => Dough;
    createSauce: () => Sauce;
    createCheese: () => Cheese;
    createVeggies: (VeggieChoices) => Veggies;
    createPepperoni: () => Pepperoni;
    createClams: () => Clams;
}

// notice how we use inheritance here to extend some of the ingredients. this is a pattern of the
// factory pattern.
export class Dough {}
export class NYCThinCrustDough extends Dough {}
export class ChicagoDeepDish extends Dough {}
export class CaliforniaSourDough extends Dough {}

// the abstract factory pattern would use interfaces to extend these ingredients. let's do this with sauce:
// these functions are just returning empty objects, but ideally each one would have its own interface;

interface IPizzaSauce {
    sweetness: string;
    saltyness: string;
    sourness: string;
    umami: string;
}

export class Sauce {
    sauce;

    constructor(typeOfSauce: string) {
        if (typeOfSauce === "NYCMarinaraSauce") {
            this.sauce = this.NYCMarinaraSauce();
        }
    }

    public NYCMarinaraSauce(): IPizzaSauce {
        return {
            sweetness: "mild",
            saltyness: "mild",
            sourness: "mild",
            umami: "mild",
        };
    }

    public ChicagoSauce(): {} {
        return {};
    }

    public CaliforniaSauce(): {} {
        return {};
    }
}

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
        return new Sauce("");
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
        return new NYCMarinaraSauce("NYCMarinaraSauce");
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
