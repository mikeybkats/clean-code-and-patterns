"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Size;
(function (Size) {
    Size["SMALL"] = "small";
    Size["MEDIUM"] = "medium";
    Size["LAGE"] = "large";
})(Size || (Size = {}));
exports.Size = Size;
var Shots;
(function (Shots) {
    Shots[Shots["SINGLE"] = 1] = "SINGLE";
    Shots[Shots["DOUBLE"] = 2] = "DOUBLE";
    Shots[Shots["TRIPLE"] = 3] = "TRIPLE";
    Shots[Shots["QUADRUPLE"] = 4] = "QUADRUPLE";
})(Shots || (Shots = {}));
exports.Shots = Shots;
/**
 * An abstract class is one which doesn't get instantiated on its own. Instead its derived classes
 * use it as a base. An abstract class is sort of like an interface in the sense that it defines how the
 * derived classes look and behave.
 */
class Beverage {
    constructor() {
        this.description = "Generic beverage.";
        this.size = Size.SMALL;
    }
    get _description() {
        return this.description;
    }
    set _description(description) {
        this.description = description;
    }
    get _size() {
        return this.size;
    }
    set _size(size) {
        this.size = size;
    }
}
exports.Beverage = Beverage;
class CondimentDecorator extends Beverage {
}
class Espresso extends Beverage {
    constructor(shots, size) {
        super();
        this._description = "Espresso shots:" + shots;
        this._shots = shots;
        this._size = size;
    }
    get _shots() {
        return this.shots;
    }
    set _shots(shots) {
        this.shots = shots;
    }
    cost() {
        return 1.5 + 0.5 * this.shots;
    }
}
exports.Espresso = Espresso;
class HouseBlend extends Beverage {
    constructor(size) {
        super();
        this._description = "Drip House Blend Coffee" + size;
        this._size = size;
    }
    cost() {
        return 2.5;
    }
}
exports.HouseBlend = HouseBlend;
class DarkRoast extends Beverage {
    constructor(size) {
        super();
        this._description = "Drip Dark Roast Coffee" + size;
        this._size = size;
    }
    cost() {
        return 2.5;
    }
}
exports.DarkRoast = DarkRoast;
class PourOver extends Beverage {
    constructor(size) {
        super();
        this._description = "Pour over coffee" + size;
        this._size = size;
    }
    cost() {
        const basePrice = 2.5;
        if (this._size === "small") {
            return basePrice;
        }
        if (this._size === "medium") {
            return basePrice + 0.25;
        }
        if (this._size === "large") {
            return basePrice + 0.5;
        }
        return basePrice;
    }
}
class Mocha extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.childBeverage = beverage;
    }
    get _description() {
        return this.childBeverage._description + ", chocolate";
    }
    get _size() {
        return this.childBeverage._size;
    }
    sizePrice() {
        const basePrice = 0.5;
        if (this._size === "small") {
            return basePrice + 0.15;
        }
        if (this._size === "medium") {
            return basePrice + 0.25;
        }
        if (this._size === "large") {
            return basePrice + 0.5;
        }
        return basePrice;
    }
    cost() {
        return this.childBeverage.cost() + this.sizePrice();
    }
}
exports.Mocha = Mocha;
class SteamedMilk extends CondimentDecorator {
    constructor(beverage) {
        super();
        this.childBeverage = beverage;
    }
    get _description() {
        return this.childBeverage._description + ", steamed milk";
    }
    get _size() {
        return this.childBeverage._size;
    }
    sizePrice() {
        const basePrice = 1.5;
        if (this._size === "small") {
            return basePrice + 0.15;
        }
        if (this._size === "medium") {
            return basePrice + 0.25;
        }
        if (this._size === "large") {
            return basePrice + 0.5;
        }
        return basePrice;
    }
    cost() {
        return this.childBeverage.cost() + this.sizePrice();
    }
}
exports.SteamedMilk = SteamedMilk;
