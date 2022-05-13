import { Menu, IMenuProps, MenuItem } from "./composite.menu";

class DinnerMenu extends Menu {
    constructor(props: IMenuProps) {
        super(props);

        this.add(
            new MenuItem({
                name: "Roast Chicken",
                description: "Slow roasted chicken in charcoal oven.",
                price: 18,
                vegetarian: false,
            })
        );
        this.add(
            new MenuItem({
                name: "Ma Po Tofu",
                description: "A tangy and tongue numbing delight.",
                price: 8,
                vegetarian: true,
            })
        );
    }
}

export { DinnerMenu };
