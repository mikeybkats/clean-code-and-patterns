import { IMenuItem } from "./iterator.menuItems.props";
import { ArrayList } from "./iterator.arrayList";

class BreakfastMenu {
    private menuItems: ArrayList<IMenuItem>;

    constructor() {
        this.menuItems = new ArrayList<IMenuItem>();

        this.menuItems.add({
            name: "Pancakes",
            description: "Short stack with butter and real maple syrup.",
            price: 4,
            vegetarian: true,
        });

        this.menuItems.add({
            name: "Sausage",
            description: "Two links of pork breakfast sausage",
            price: 5,
            vegetarian: false,
        });
    }

    public printMenuNames(): void {
        for (let i = 0; i < this.menuItems.size(); i++) {
            console.log(this.menuItems.get(i).data);
        }
    }

    public get _menu(): ArrayList<IMenuItem> {
        return this.menuItems;
    }
}

new BreakfastMenu().printMenuNames();
