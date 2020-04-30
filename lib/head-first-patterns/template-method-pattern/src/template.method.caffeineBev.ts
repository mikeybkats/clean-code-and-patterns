// template.method.caffeineBev.ts;
// CaffeinBeverage superclass

abstract class CaffeineBeverage {
    public prepareRecipe(): void {
        this.boilWater();
        this.brew();
        this.addCondiments();
        this.pourInCup();
    }

    public boilWater(): void {
        console.log("water boiled");
    }

    public pourInCup(): void {
        console.log("pouring beverage");
    }

    abstract addCondiments(): void;
    abstract brew(): void;
}

export default CaffeineBeverage;
