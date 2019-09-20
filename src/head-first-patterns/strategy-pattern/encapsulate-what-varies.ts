/*
 * THE STRATEGY PATTERN:
 * defines a family of algorithms, encapsulates each one, and makes them interchangeable.
 * Strategy lets the algorithm vary independently from clients that use it.
 *
 * Favors composition over inheritance, even though we use the class structure.
 * This pattern favors many classes to decouple the structure
 *
 */

interface IQuackBehavior {
    quack?: string;
    makeQuack: () => void;
}

interface IFlyBehavior {
    fly: () => void;
}

class Quack<IQuackBehavior> {
    quack: string;

    constructor(quack: string) {
        this.quack = quack || "Quack";
    }

    public makeQuack = () => console.log(this.quack);
}

class FlyWithWings implements IFlyBehavior {
    public fly = () => console.log("the duck takes off!\n");
}

class CanNotFly implements IFlyBehavior {
    public fly = () => console.log("This duck cannot fly.\n");
}

class FlyRocketPowered implements IFlyBehavior {
    public fly = () => console.log("I'm a rocket duck and I'm flying");
}

class Duck {
    quackBehavior!: IQuackBehavior;
    flyBehavior!: IFlyBehavior;

    public performQuack(): void {
        this.quackBehavior.makeQuack();
    }

    public performFlying(): void {
        this.flyBehavior.fly();
    }

    public setFlyBehavior(flyBehavior: IFlyBehavior): void {
        this.flyBehavior = flyBehavior;
    }

    public setQuackBehavior(quackBehavior: IQuackBehavior): void {
        this.quackBehavior = quackBehavior;
    }
}

class Mallard extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack("Special Quack!");
        this.flyBehavior = new FlyWithWings();
    }

    public displayQuack = (): void => {
        this.quackBehavior.makeQuack();
    };

    public goFlying = (): void => {
        this.flyBehavior.fly();
    };
}

class RubberDucky extends Duck {
    constructor() {
        super();
        this.quackBehavior = new Quack("Squeek!");
        this.flyBehavior = new CanNotFly();
    }

    public displayQuack = (): void => {
        this.quackBehavior.makeQuack();
    };
    public goFlying = (): void => {
        this.flyBehavior.fly();
    };
}

class ModelDuck extends Duck {
    flyBehavior = new CanNotFly();
    quackBehavior = new Quack("Yeah dawg.");

    public display() {
        console.log("I'm a model duck.'");
    }
    public goFlying = (): void => {
        this.flyBehavior.fly();
    };
}

const myDuck = new Mallard();
console.log("displaying myDuck.displayQuack()");
myDuck.displayQuack();
console.log("displaying myDuck.goFlying()");
myDuck.goFlying();

const myRubberDucky = new RubberDucky();
console.log("displaying myRubberDucky.displayQuack()");
myRubberDucky.displayQuack();
console.log("displaying myRubberDucky.goFlying()");
myRubberDucky.goFlying();

const myModelDuck = new ModelDuck();
myModelDuck.goFlying();
myModelDuck.setFlyBehavior(new FlyRocketPowered());
myModelDuck.goFlying();
