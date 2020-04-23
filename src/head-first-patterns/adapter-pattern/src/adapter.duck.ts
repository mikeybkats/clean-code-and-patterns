interface IDuck {
    quack: () => void;
    fly: () => void;
}

class Duck implements IDuck {
    public quack(): void {
        console.log("quack");
    }

    public fly(): void {
        console.log("I'm flying a long distance.");
    }
}

interface ITurkey {
    gobble: () => void;
    fly: () => void;
}

class WildTurkey implements ITurkey {
    public gobble(): void {
        console.log("gobble gobble");
    }

    public fly(): void {
        console.log("Turkey flying a short distance.");
    }
}

class TurkeyAdapter implements IDuck {
    turkey: ITurkey;

    constructor(turkey: ITurkey) {
        this.turkey = turkey;
    }

    public quack(): void {
        this.turkey.gobble();
    }

    public fly(): void {
        // because a turkey can't fly as far as a duck we need to call fly multiple times to make the same distance.
        for (let i = 0; i < 5; i++) {
            this.turkey.fly();
        }
    }
}

interface IDuckShortFlight extends IDuck {
    flyShortDistance: () => void;
}

class ShortFlyDuck extends Duck implements IDuckShortFlight {
    public flyShortDistance(): void {
        console.log("I'm flying a short distance.");
    }
}

class DuckAdapter implements ITurkey {
    duck: IDuckShortFlight;

    constructor(duck: IDuckShortFlight) {
        this.duck = duck;
    }

    public gobble(): void {
        this.duck.quack();
    }
    public fly(): void {
        this.duck.flyShortDistance();
    }
}

class DuckTestDrive {
    public main(): void {
        const duck = new Duck();
        const shortFlyDuck = new ShortFlyDuck();
        const turkey = new WildTurkey();
        const duckTurkey = new TurkeyAdapter(turkey);
        const turkeyDuck = new DuckAdapter(shortFlyDuck);

        console.log("The Turkey says: ");
        turkey.gobble();
        turkey.fly();

        this.testDuck(duck);
        this.testDuck(duckTurkey);
        this.testTurkey(turkeyDuck);
    }

    public testDuck(duck: IDuck): void {
        duck.quack();
        duck.fly();
    }

    public testTurkey(turkey: ITurkey): void {
        turkey.gobble();
        turkey.fly();
    }
}

const duckAdapterTest = new DuckTestDrive();
duckAdapterTest.main();
