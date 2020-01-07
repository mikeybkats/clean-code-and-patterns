enum Size {
    SMALL = "small",
    MEDIUM = "medium",
    LAGE = "large",
}

enum Shots {
    SINGLE = 1,
    DOUBLE = 2,
    TRIPLE = 3,
    QUADRUPLE = 4,
}

/**
 * An abstract class is one which doesn't get instantiated on its own. Instead its derived classes
 * use it as a base. An abstract class is sort of like an interface in the sense that it defines how the
 * derived classes look and behave.
 */
abstract class Beverage {
    private description: string = "Generic beverage.";
    public size: Size = Size.SMALL;

    public abstract cost(): number;

    public get _description(): string {
        return this.description;
    }

    public set _description(description: string) {
        this.description = description;
    }

    public get _size(): Size {
        return this.size;
    }

    public set _size(size: Size) {
        this.size = size;
    }
}

abstract class CondimentDecorator extends Beverage {
    public abstract get _description(): string;
    public abstract get _size(): Size;
}

class Espresso extends Beverage {
    private shots: number;

    constructor(shots: Shots, size: Size) {
        super();
        this._description = "Espresso shots:" + shots;
        this._shots = shots;
        this._size = size;
    }

    public get _shots(): Shots {
        return this.shots;
    }

    public set _shots(shots: Shots) {
        this.shots = shots;
    }

    public cost(): number {
        return 1.5 + 0.5 * this.shots;
    }
}

class HouseBlend extends Beverage {
    constructor(size: Size) {
        super();
        this._description = "Drip House Blend Coffee" + size;
        this._size = size;
    }

    public cost(): number {
        return 2.5;
    }
}

class DarkRoast extends Beverage {
    constructor(size: Size) {
        super();
        this._description = "Drip Dark Roast Coffee" + size;
        this._size = size;
    }

    public cost(): number {
        return 2.5;
    }
}

class PourOver extends Beverage {
    constructor(size: Size) {
        super();
        this._description = "Pour over coffee" + size;
        this._size = size;
    }

    public cost(): number {
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
    private childBeverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.childBeverage = beverage;
    }

    public get _description(): string {
        return this.childBeverage._description + ", chocolate";
    }

    public get _size(): Size {
        return this.childBeverage._size;
    }

    private sizePrice(): number {
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

    public cost(): number {
        return this.childBeverage.cost() + this.sizePrice();
    }
}

class SteamedMilk extends CondimentDecorator {
    private childBeverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.childBeverage = beverage;
    }

    public get _description(): string {
        return this.childBeverage._description + ", steamed milk";
    }

    public get _size(): Size {
        return this.childBeverage._size;
    }

    private sizePrice(): number {
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

    public cost(): number {
        return this.childBeverage.cost() + this.sizePrice();
    }
}

export {
    Shots,
    Size,
    SteamedMilk,
    Mocha,
    DarkRoast,
    HouseBlend,
    Espresso,
    Beverage,
};
