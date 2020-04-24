const readline = require("readline");

// template.method.caffeineBeverageWithHook.ts;
abstract class CaffeineBeverageWithHook {
    async prepareBeverage(): Promise<void> {
        this.boilWater();
        this.brew();
        this.pourInCup();
        const condiments = await this.customerWantsCondiments();
        if (condiments) {
            console.log(condiments);
            this.addCondiments();
        }
    }

    abstract brew(): void;
    abstract addCondiments(): void;

    public boilWater(): void {
        console.log("boiling water");
    }

    public pourInCup(): void {
        console.log("pouring beverage in cup");
    }

    public customerWantsCondiments(): boolean | Promise<boolean> {
        console.log("Does customer want condiments?");
        return false;
    }
}

class SpecialCoffeeDrink extends CaffeineBeverageWithHook {
    constructor() {
        super();
    }

    public brew(): void {
        console.log("brewing coffee with pizzaz");
    }

    public addCondiments(): void {
        console.log("Adding special coffee condiments");
    }

    public async customerWantsCondiments(): Promise<boolean> {
        return await this.getCustomerInput();
    }

    private async getCustomerInput(): Promise<boolean> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        return new Promise((resolve, reject) => {
            rl.question(
                "Would you like a special coffee drink?",
                (answer: string) => {
                    if (answer[0] === "y") {
                        resolve(true);
                    } else reject(false);
                    rl.close();
                }
            );
        });
    }
}

class TestDrive {
    public main(): void {
        const specialCoffee: SpecialCoffeeDrink = new SpecialCoffeeDrink();

        console.log("making coffee");

        specialCoffee.prepareBeverage();
    }
}

const myCoffee = new TestDrive();
myCoffee.main();
