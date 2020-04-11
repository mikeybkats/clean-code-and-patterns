"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// notice how we use inheritance here to extend some of the ingredients. this is a pattern of the
// factory pattern.
class Dough {
}
exports.Dough = Dough;
class NYCThinCrustDough extends Dough {
}
exports.NYCThinCrustDough = NYCThinCrustDough;
class ChicagoDeepDish extends Dough {
}
exports.ChicagoDeepDish = ChicagoDeepDish;
class CaliforniaSourDough extends Dough {
}
exports.CaliforniaSourDough = CaliforniaSourDough;
class Sauce {
    constructor(typeOfSauce) {
        if (typeOfSauce === "") {
            this.sauceProfile = {
                sweetness: "default",
                saltyness: "default",
                sourness: "default",
                umami: "default",
                thickness: "thin",
            };
        }
        if (typeOfSauce === "NYCMarinaraSauce") {
            this.sauceProfile = this.NYCMarinaraSauce();
        }
        if (typeOfSauce === "ChicagoSauce") {
        }
        if (typeOfSauce === "CaliforniaSauce") {
        }
    }
    NYCMarinaraSauce() {
        return {
            sweetness: "mild",
            saltyness: "mild",
            sourness: "mild",
            umami: "mild",
            thickness: "thin",
        };
    }
    ChicagoSauce() {
        return {};
    }
    CaliforniaSauce() {
        return {};
    }
}
exports.Sauce = Sauce;
class NYCMarinaraSauce extends Sauce {
}
exports.NYCMarinaraSauce = NYCMarinaraSauce;
class ChicagoSauce extends Sauce {
}
exports.ChicagoSauce = ChicagoSauce;
class CaliforniaSauce extends Sauce {
}
exports.CaliforniaSauce = CaliforniaSauce;
class Cheese {
}
exports.Cheese = Cheese;
class Reggiano extends Cheese {
}
exports.Reggiano = Reggiano;
class Mozzarella extends Cheese {
}
exports.Mozzarella = Mozzarella;
class Veggies {
}
exports.Veggies = Veggies;
class Olives extends Veggies {
}
exports.Olives = Olives;
class Garlic extends Veggies {
}
exports.Garlic = Garlic;
class Onion extends Veggies {
}
exports.Onion = Onion;
class Pepperoni {
}
exports.Pepperoni = Pepperoni;
class Clams {
}
exports.Clams = Clams;
var VeggieChoices;
(function (VeggieChoices) {
    VeggieChoices["OLIVES"] = "olives";
    VeggieChoices["GARLIC"] = "garlic";
    VeggieChoices["ONION"] = "onion";
    VeggieChoices["BASIL"] = "basil";
    VeggieChoices["BANANAPEPPERS"] = "banana peppers";
    VeggieChoices["GREENPEPPERS"] = "green peppers";
    VeggieChoices["ARTICHOKE"] = "artichoke";
})(VeggieChoices = exports.VeggieChoices || (exports.VeggieChoices = {}));
class PizzaIngredientFactory {
    constructor() { }
    createDough() {
        return new Dough();
    }
    createSauce() {
        return new Sauce("");
    }
    createCheese() {
        return new Cheese();
    }
    createVeggies(choice) {
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
    createPepperoni() {
        return new Pepperoni();
    }
    createClams() {
        return new Clams();
    }
}
exports.PizzaIngredientFactory = PizzaIngredientFactory;
class NYCPizzaIngredientFactory {
    constructor() { }
    createDough() {
        return new NYCThinCrustDough();
    }
    createSauce() {
        return new NYCMarinaraSauce("NYCMarinaraSauce");
    }
    createCheese() {
        return new Reggiano();
    }
    createVeggies() {
        return new Veggies();
    }
    createPepperoni() {
        return new Pepperoni();
    }
    createClams() {
        return new Clams();
    }
}
exports.NYCPizzaIngredientFactory = NYCPizzaIngredientFactory;
