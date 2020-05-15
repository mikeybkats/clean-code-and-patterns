import { Menu, IMenuProps, MenuItem } from "./composite.menu";

class SpecialMenu extends Menu {
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

export { SpecialMenu };
