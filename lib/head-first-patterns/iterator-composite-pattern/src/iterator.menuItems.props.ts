// TODO: Add one interface for breakfast and dinner menus

export interface IMenuItem {
    name: string;
    description: string;
    price: number;
    vegetarian: boolean;
}

export class MenuItem implements IMenuItem {
    name: string;
    description: string;
    price: number;
    vegetarian: boolean;

    constructor(props: IMenuItem) {
        this.name = props.name;
        this.description = props.description;
        this.price = props.price;
        this.vegetarian = props.vegetarian;
    }

    public getItem(): IMenuItem {
        return {
            name: this.name,
            description: this.description,
            price: this.price,
            vegetarian: this.vegetarian,
        };
    }
}
