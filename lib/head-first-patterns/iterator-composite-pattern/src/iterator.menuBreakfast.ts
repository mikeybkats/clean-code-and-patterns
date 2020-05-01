import { IMenuItem } from "./iterator.menuItems.props";

class BreakfastMenu {
    menuItems: IMenuItem[];

    constructor() {
        this.menuItems = new Array<IMenuItem>(9);

        this.addItems([
            {
                name: "Pancakes",
                description: "Short stack with butter and real maple syrup.",
                price: 4,
                vegetarian: true,
            },
            {
                name: "Sausage",
                description: "Two links of pork breakfast sausage",
                price: 5,
                vegetarian: false,
            },
        ]);

        console.log(this.menuItems);
    }

    public addItems(items: IMenuItem[]): void {
        items.forEach((addItem: IMenuItem) => {
            let menuIndex = 0;
            while (menuIndex < this.menuItems.length) {
                if (
                    !this.menuItems[menuIndex] ||
                    (this.menuItems[menuIndex] &&
                        !this.menuItems[menuIndex].name)
                ) {
                    this.menuItems[menuIndex] = addItem;
                    menuIndex = this.menuItems.length;
                    break;
                }
                menuIndex++;
            }
        });
    }
}

new BreakfastMenu();
