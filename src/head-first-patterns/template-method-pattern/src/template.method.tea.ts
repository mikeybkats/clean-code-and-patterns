// template.method.tea.ts;
import CaffeineBeverage from "./template.method.caffeineBev";

class TeaBeverage extends CaffeineBeverage {
    public brew(): void {
        console.log("adding hot water to tea bag");
    }

    public addCondiments(): void {
        console.log("adding honey");
    }
}

export { TeaBeverage };
