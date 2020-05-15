import { Menu, IMenuProps, MenuItem } from "./composite.menu";

class BreakfastMenu extends Menu {
    constructor(props: IMenuProps) {
        super(props);

        this.add(
            new MenuItem({
                name: "Pancakes",
                description: "Short stack with butter and real maple syrup.",
                price: 4,
                vegetarian: true,
            })
        );

        this.add(
            new MenuItem({
                name: "Sausage",
                description: "Two links of pork breakfast sausage",
                price: 5,
                vegetarian: false,
            })
        );
    }
}

export { BreakfastMenu };
