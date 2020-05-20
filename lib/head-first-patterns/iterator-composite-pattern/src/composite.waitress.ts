import { MenuComponent } from "./composite.menu";

export class Waitress {
    private allMenus: MenuComponent;
    constructor(menu: MenuComponent) {
        this.allMenus = menu;
    }

    public print(): void {
        this.allMenus.print();
    }
}
