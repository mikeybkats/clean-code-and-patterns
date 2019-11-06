"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An abstract class is one which doesn't get instantiated on its own. Instead its derived classes
 * use it as a base. An abstract class is sort of like an interface in the sense that it defines how the
 * derived classes look and behave.
 */
class Beverage {
    constructor() {
        this.description = "Generic beverage.";
    }
    get _description() {
        return this.description;
    }
    set _description(description) {
        this.description = description;
    }
}
exports.Beverage = Beverage;
class CondimentDecorator extends Beverage {
}
class Espresso extends Beverage {
    constructor() {
        super();
        this._description = "Espresso";
    }
    cost() {
        return 2.5;
    }
}
exports.Espresso = Espresso;
class HouseBlend extends Beverage {
    constructor() {
        super();
        this._description = "Drip House Blend Coffee";
    }
    cost() {
        return 2.5;
    }
}
exports.HouseBlend = HouseBlend;
class Mocha extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.childBeverage = beverage;
    }
    get _description() {
        return this.childBeverage._description + ", chocolate";
    }
    cost() {
        return this.childBeverage.cost() + 1.5;
    }
}
exports.Mocha = Mocha;
class SteamedMilk extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.childBeverage = beverage;
    }
    get _description() {
        return this.childBeverage._description + ", steamed Milk";
    }
    cost() {
        return this.childBeverage.cost() + 2.5;
    }
}
exports.SteamedMilk = SteamedMilk;
