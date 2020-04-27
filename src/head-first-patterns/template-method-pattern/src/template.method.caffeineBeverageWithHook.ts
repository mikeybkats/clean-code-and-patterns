import { Interface } from "readline";
import * as readline from "readline";
// const readline = require("readline");
// template.method.caffeineBeverageWithHook.ts;

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

    public rejectCondments(): void {
        console.log("The customer does not want the special coffee drink.");
        console.log("Here is the plain coffee drink.");
    }

    public async customerWantsCondiments(): Promise<boolean | void> {
        return await this.getCustomerInput();
    }

    private async askQuestion(rl: Interface): Promise<boolean> {
        return new Promise((resolve, reject) => {
            rl.question(
                "Would you like a special coffee drink?",
                (answer: string) => {
                    if (answer[0] && answer[0].toLowerCase() === "y") {
                        resolve(true);
                        rl.close();
                    }
                    if (answer[0] && answer[0].toLowerCase() === "n") {
                        resolve(false);
                        rl.close();
                    }
                    if (answer.length === 0) {
                        this.askQuestion(rl);
                    } else
                        reject(
                            new Error("It seems a strange error has occured.")
                        );
                }
            );
        });
    }

    private async getCustomerInput(): Promise<boolean> {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        return this.askQuestion(rl).catch((rejection) => {
            console.log(rejection);
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
