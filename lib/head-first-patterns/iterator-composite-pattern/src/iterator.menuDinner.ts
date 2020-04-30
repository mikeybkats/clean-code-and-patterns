import { IMenuItem, MenuItem } from "./iterator.menuItems.props";

type FixedLengthMenu = readonly [
    IMenuItem,
    IMenuItem,
    IMenuItem,
    IMenuItem,
    IMenuItem,
    IMenuItem
];

class DinnerMenu {
    menuItems: FixedLengthMenu;

    constructor() {
        const blankMenu = Array.from(
            { length: 6 },
            () =>
                new MenuItem({
                    name: null,
                    description: null,
                    price: null,
                    vegetarian: null,
                })
        ) as unknown;
        this.menuItems = blankMenu as FixedLengthMenu;

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
        this.menuItems.forEach((item) => console.log(item.name));
    }
}

export { DinnerMenu };

const myMenu = new DinnerMenu();
myMenu.printMenuNames();
