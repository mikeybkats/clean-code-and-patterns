import { Menu, MenuItem, IMenuProps } from "./composite.menu";

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
    }
}

const thursdayMenu = new MyMenu({
    name: "Michael's menu",
    description: "Thursday night dinner.",
});

thursdayMenu.print();

// const fries = thursdayMenu.getChild(0);

// thursdayMenu.remove(fries);

// thursdayMenu.print();
