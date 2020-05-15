import { Menu, MenuItem, IMenuProps, MenuComponent } from "./composite.menu";
import { BreakfastMenu } from "./composite.menuBreakfast";

class MyMenu extends Menu {
    constructor(props: IMenuProps) {
        super(props);

        this.add(
            new MenuItem({
                name: "fries",
                price: 3,
                description: "golden fried sliced potatoes",
                vegetarian: true,
            })
        );
        this.add(
            new MenuItem({
                name: "burger",
                price: 6,
                description: "Michael's special burger.",
                vegetarian: false,
            })
        );

        this.add(
            new BreakfastMenu({
                name: "Breakfast Menu",
                description: "Served from 7am to 11am daily.",
            })
        );
    }
}

class Waitress {
    private allMenus: MenuComponent;
    constructor(menu: MenuComponent) {
        this.allMenus = menu;
    }

    public print(): void {
        this.allMenus.print();
    }
}

const thursdayMenu = new MyMenu({
    name: "Michael's menu",
    description: "Thursday night dinner.",
});

const ourWaitress = new Waitress(thursdayMenu);

ourWaitress.print();
