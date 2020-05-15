import { IMenuItem } from "./iterator.menuItems.props";
import { ArrayList } from "./arrayList";
import { ArrayListMenuIterator, Iterator } from "./iterator.menuIterator";

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
        const iterator = this.createIterator();
        while (iterator.hasNext()) {
            console.log(iterator.current());
            iterator.next();
        }
    }

    public createIterator(): Iterator<ArrayList<IMenuItem>> {
        return new ArrayListMenuIterator(this.menuItems);
    }

    public get _menu(): ArrayList<IMenuItem> {
        return this.menuItems;
    }
}

export { BreakfastMenu };
