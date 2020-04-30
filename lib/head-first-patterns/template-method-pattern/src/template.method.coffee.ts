// template.method.coffee.ts;
import CaffeineBeverage from "./template.method.caffeineBev";

class CoffeeBeverage extends CaffeineBeverage {
    public addCondiments(): void {
        console.log("adding condiments: no sugar, no milk :)");
    }

    public brew(): void {
        console.log("pouring water over coffee and filter.");
    }
}

export { CoffeeBeverage };
