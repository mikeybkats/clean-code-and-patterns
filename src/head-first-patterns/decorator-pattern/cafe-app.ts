enum Size {
    EXSMALL = "extra small",
    SMALL = "small",
    MEDIUM = "medium",
    LAGE = "large",
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
}

class Espresso extends Beverage {
    constructor() {
        super();
        this._description = "Espresso";
    }

    public cost(): number {
        return 2.5;
    }
}

class HouseBlend extends Beverage {
    constructor() {
        super();
        this._description = "Drip House Blend Coffee";
    }

    public cost(): number {
        return 2.5;
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

    public cost(): number {
        return this.childBeverage.cost() + 1.5;
    }
}

class SteamedMilk extends CondimentDecorator {
    private childBeverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.childBeverage = beverage;
    }

    public get _description(): string {
        return this.childBeverage._description + ", steamed Milk";
    }

    public cost(): number {
        return this.childBeverage.cost() + 2.5;
    }
}

export { SteamedMilk, Mocha, HouseBlend, Espresso, Beverage };
