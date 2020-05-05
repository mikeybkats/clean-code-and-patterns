import { IMenuItem, MenuItem } from "./iterator.menuItems.props";
import { DinnerMenuIterator, Iterator } from "./iterator.menuIterator";

class DinnerMenu {
    private readonly menuItems: IMenuItem[];

    constructor() {
        this.menuItems = Array.from({ length: 6 }, () =>
            new MenuItem({
                name: null,
                description: null,
                price: null,
                vegetarian: null,
            }).getItem()
        );

        this.replaceItem(
            {
                name: "BLT",
                description: "bacon lettuce and tomato",
                price: 5,
                vegetarian: false,
            },
            0
        );

        this.addItem({
            name: "Veggie pot pie",
            description: "A delicious vegetarian pie.",
            price: 8,
            vegetarian: true,
        });
    }

    private replaceItem(item: IMenuItem, index: number): void {
        this.menuItems[index].name = item.name;
        this.menuItems[index].description = item.description;
        this.menuItems[index].price = item.price;
        this.menuItems[index].vegetarian = item.vegetarian;
    }

    private addItem(item: IMenuItem): void {
        let index = 0;
        while (index < this.menuItems.length) {
            if (!this.menuItems[index].name) {
                this.menuItems[index].name = item.name;
                this.menuItems[index].description = item.description;
                this.menuItems[index].price = item.price;
                this.menuItems[index].vegetarian = item.vegetarian;
                index = this.menuItems.length;
            }
            index++;
        }
    }

    public printMenuNames(): void {
        const iterator = this.createIterator();
        while (iterator.hasNext()) {
            if (iterator.current().value.name !== null) {
                console.log(iterator.current());
            }
            iterator.next();
        }
    }

    public createIterator(): Iterator<IMenuItem[]> {
        return new DinnerMenuIterator(this.menuItems);
    }

    public get _menu(): IMenuItem[] {
        return this.menuItems;
    }
}

export { DinnerMenu };
