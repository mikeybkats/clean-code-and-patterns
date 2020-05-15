import { DinnerMenu } from "./iterator.menuDinner";
import { BreakfastMenu } from "./iterator.menuBreakfast";
import { Iterator } from "./iterator.menuIterator";
import { IMenuItem } from "./iterator.menuItems.props";
import { ArrayList } from "./arrayList";

class MenuServer {
    private dinnerMenu: DinnerMenu;
    private breakfastMenu: BreakfastMenu;

    constructor() {
        this.dinnerMenu = new DinnerMenu();
        this.breakfastMenu = new BreakfastMenu();
    }

    public printMenu(
        menuIterator: Iterator<ArrayList<IMenuItem> | IMenuItem[]>
    ): void {
        while (menuIterator.hasNext()) {
            if (menuIterator.current().value.name !== null) {
                console.log(menuIterator.current().value);
            }
            menuIterator.next();
        }
    }

    public printMenus(): void {
        const dinnerIterator: Iterator<
            IMenuItem[]
        > = this.dinnerMenu.createIterator();
        const breakfastIterator: Iterator<ArrayList<
            IMenuItem
        >> = this.breakfastMenu.createIterator();

        this.printMenu(dinnerIterator);
        this.printMenu(breakfastIterator);
    }
}

new MenuServer().printMenus();
