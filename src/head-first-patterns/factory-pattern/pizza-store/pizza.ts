export abstract class Pizza {
    name: string;
    dough: string;
    sauce: string;
    toppings: string[] = [];

    prepare(): void {
        console.log(`Preparing ${this.name}`);

        this.toppings.forEach(topping => {
            console.log(`Adding ${topping}`);
        });
    }

    bake(): void {
        console.log(
            "Baking pizza for 5 minutes in charcoal oven at 800 degrees F."
        );
    }
    cut(): void {
        console.log("Cutting pizza.");
    }
    box(): void {
        console.log("Putting pizza in box.");
    }

    public getName(): string {
        return this.name;
    }
}

// each differnt style of pizza gets it's own class
export class NYCStyleCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = "NY style sauce and cheese pizza.";
        this.dough = "Thin crust dough.";
        this.sauce = "Marinara sauce.";
        this.toppings.push("Grated Reggiano cheese.");
    }
}

export class ChicagoStyleCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = "Chicago style deep dish cheese pizza.";
        this.dough = "Extra thick crust dough.";
        this.sauce = "Plum tomato sauce.";
        this.toppings.push("Shredded mozzarella cheese.");
    }

    public cut(): void {
        console.log("Cutting pizza into square slices.");
    }
    public bake(): void {
        console.log(
            "Baking pizza for 25 minutes in brick oven at 350 degrees F."
        );
    }
}
