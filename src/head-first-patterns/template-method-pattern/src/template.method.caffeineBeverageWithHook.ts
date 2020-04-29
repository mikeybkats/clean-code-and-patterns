import { Interface } from "readline";
import * as readline from "readline";

abstract class CaffeineBeverageWithHook {
    async prepareBeverage(): Promise<void> {
        this.boilWater();
        this.brew();
        this.pourInCup();
        const condiments = await this.customerWantsCondiments();
        if (condiments) {
            this.addCondiments();
        } else {
            this.rejectCondments();
        }
        this.handBeverage();
    }

    abstract brew(): void;
    abstract addCondiments(): void;
    abstract rejectCondments(): void;

    public boilWater(): void {
        console.log("boiling water");
    }

    public pourInCup(): void {
        console.log("pouring beverage in cup");
    }

    public customerWantsCondiments(): boolean | Promise<boolean | void> {
        console.log("Does customer want condiments?");
        return false;
    }

    public handBeverage(): void {
        console.log("Thank you. Please take your beverage.");
        process.exit();
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
        console.log("Adding special coffee condiments to coffee drink.");
    }

    public rejectCondments(): void {
        console.log("The customer does not want the special coffee drink.");
        console.log("Here is the plain coffee drink.");
    }

    public async customerWantsCondiments(): Promise<boolean | void> {
        return await this.getCustomerInput();
    }

    private async askQuestion(rl: Interface): Promise<boolean> {
        return new Promise((resolve) => {
            rl.question(
                "Would you like a special coffee drink? (y/n): ",
                (answer: string) => {
                    if (answer && answer[0].toLowerCase() === "y") {
                        resolve(true);
                        rl.close();
                        return false;
                    }
                    if (answer && answer[0].toLowerCase() === "n") {
                        resolve(false);
                        rl.close();
                        return false;
                    } else {
                        resolve(this.askQuestion(rl));
                        return false;
                    }
                }
            );
        });
    }

    // TODO: Try writing this so that getCustomerInput is a seperate subclass
    private async getCustomerInput(): Promise<boolean> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        return this.askQuestion(rl).catch((error) => {
            console.log(new Error(error));
            return false;
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
