import { Menu, MenuComponent } from "./composite.menu";

export class Waitress {
    private allMenus: Menu;
    constructor(menu: Menu) {
        this.allMenus = menu;
    }

    public print(): void {
        this.allMenus.print();
    }

    public printVegetarianMenus(): void {
        const menuIterator = this.allMenus.createIterator();
        while (menuIterator.hasNext()) {
            const menuComponent: MenuComponent = menuIterator.current().value;
            if (menuComponent._Vegetarian === true) {
                menuComponent.print();
            }
            menuIterator.next();
        }
    }
}
