import { ArrayList } from "./iterator.arrayList";

interface IMenuComponent {
    _Name: string;
    _Description: string;
    _Price: number;
    _Vegetarian: boolean;
    print: () => void;
    add?: (menu: MenuComponent) => void;
    remove?: (menu: MenuComponent) => void;
    getChild?: (child: number) => void;
}

abstract class MenuComponent implements IMenuComponent {
    public get _Name(): string {
        return "name";
    }
    public get _Description(): string {
        throw new Error("Description not defined.");
    }
    public get _Price(): number {
        throw new Error("Price not defined");
    }
    public get _Vegetarian(): boolean {
        throw new Error("Vegetarian is not defined.");
    }
    public print(): void {
        throw new Error("Print method is not defined.");
    }
    public add(menu: MenuComponent): void {
        throw new Error("Add method is not defined");
    }
    public remove(menu: MenuComponent): void {
        throw new Error("Remove method is not defined");
    }
    public getChild(child: number): void {
        throw new Error("Get child method is not defined");
    }
}

interface IMenuItemProps {
    name: string;
    description: string;
    price: number;
    isVegetarian: boolean;
}

class MenuItem extends MenuComponent {
    private name: string;
    private description: string;
    private price: number;
    private vegetarian: boolean;

    constructor(props: IMenuItemProps) {
        super();
        this.name = props.name;
        this.description = props.description;
        this.price = props.price;
        this.vegetarian = props.isVegetarian;
    }

    public get _Name(): string {
        return this.name;
    }

    public get _Description(): string {
        return this.description;
    }

    public get _Price(): number {
        return this.price;
    }

    public get _Vegetarian(): boolean {
        return this.vegetarian;
    }

    public print(): void {
        console.log({
            name: this._Name,
            description: this._Description,
            price: this._Price,
            vegetarian: this._Vegetarian,
        });
    }
}

class Menu extends MenuComponent {
    private menuComponents: ArrayList<MenuComponent>;
    private name: string;
    private description: string;

    constructor(name: string, description: string) {
        super();
        this.name = name;
        this.description = description;
    }

    public getChild(child: number): MenuComponent {
        return this.menuComponents.get(child).data;
    }

    public remove(menu: MenuComponent): void {
        this.menuComponents.remove(menu);
    }
}
