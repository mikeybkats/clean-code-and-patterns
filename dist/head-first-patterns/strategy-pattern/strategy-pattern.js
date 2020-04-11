"use strict";
/*
 * THE STRATEGY PATTERN:
 * defines a family of algorithms, encapsulates each one, and makes them interchangeable.
 * Strategy lets the algorithm vary independently from clients that use it.
 *
 * Favors composition over inheritance, even though we use the class structure.
 * This pattern favors many classes to decouple the structure
 *
 */
class Quack {
    constructor(quack) {
        this.makeQuack = () => console.log(this.quack);
        this.quack = quack || "Quack";
    }
}
class FlyWithWings {
    constructor() {
        this.fly = () => console.log("the duck takes off!\n");
    }
}
class CanNotFly {
    constructor() {
        this.fly = () => console.log("This duck cannot fly.\n");
    }
}
class FlyRocketPowered {
    constructor() {
        this.fly = () => console.log("I'm a rocket duck and I'm flying");
    }
}
class Duck {
    constructor() {
        this.quackBehavior = !;
        this.flyBehavior = !;
    }
    performQuack() {
        this.quackBehavior.makeQuack();
    }
    performFlying() {
        this.flyBehavior.fly();
    }
    setFlyBehavior(flyBehavior) {
        this.flyBehavior = flyBehavior;
    }
    setQuackBehavior(quackBehavior) {
        this.quackBehavior = quackBehavior;
    }
}
class Mallard extends Duck {
    constructor() {
        super();
        this.displayQuack = () => {
            this.quackBehavior.makeQuack();
        };
        this.goFlying = () => {
            this.flyBehavior.fly();
        };
        this.quackBehavior = new Quack("Special Quack!");
        this.flyBehavior = new FlyWithWings();
    }
}
class RubberDucky extends Duck {
    constructor() {
        super();
        this.displayQuack = () => {
            this.quackBehavior.makeQuack();
        };
        this.goFlying = () => {
            this.flyBehavior.fly();
        };
        this.quackBehavior = new Quack("Squeek!");
        this.flyBehavior = new CanNotFly();
    }
}
class ModelDuck extends Duck {
    constructor() {
        super(...arguments);
        this.flyBehavior = new CanNotFly();
        this.quackBehavior = new Quack("Yeah dawg.");
        this.goFlying = () => {
            this.flyBehavior.fly();
        };
    }
    display() {
        console.log("I'm a model duck.'");
    }
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
