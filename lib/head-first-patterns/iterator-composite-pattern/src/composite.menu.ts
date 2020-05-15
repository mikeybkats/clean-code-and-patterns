import { ArrayList } from "./iterator.arrayList";
import { IMenuItem } from "./iterator.menuItems.props";
import { ArrayListComponentIterator, Iterator } from "./composite.iterator";

export interface IMenuComponent {
    _Name: string;
    _Description: string;
    _Price?: number;
    _Vegetarian?: boolean;
    print?: () => void;
    add?: (menu: MenuComponent) => void;
    remove?: (menu: MenuComponent) => void;
    getChild?: (child: number) => void;
}

export abstract class MenuComponent implements IMenuComponent {
    public get _Name(): string {
        throw new Error("Name is not defined");
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

export class MenuItem extends MenuComponent {
    private name: string;
    private description: string;
    private price: number;
    private vegetarian: boolean;

    constructor(props: IMenuItem) {
        super();
        this.name = props.name;
        this.description = props.description;
        this.price = props.price;
        this.vegetarian = props.vegetarian;
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
        console.log(
            `name: ${this._Name} \ndescription: ${this._Description} \nprice: ${this._Price} \nvegetarian: ${this._Vegetarian} \n`
        );
    }
}

export interface IMenuProps {
    name: string;
    description: string;
}

export class Menu extends MenuComponent {
    private menuComponents: ArrayList<MenuComponent>;
    private name: string;
    private description: string;

    constructor(props: IMenuProps) {
        super();
        this.name = props.name;
        this.description = props.description;
        this.menuComponents = new ArrayList<MenuComponent>();
    }

    public get _Name(): string {
        return this.name;
    }

    public get _Description(): string {
        return this.description;
    }

    public getChild(child: number): MenuComponent {
        return this.menuComponents.get(child).data;
    }

    public remove(menu: MenuComponent): void {
        this.menuComponents.remove(menu);
    }

    public add(menu: MenuComponent): void {
        this.menuComponents.add(menu);
    }

    public print(): void {
        console.log(`${this._Name} \n${this._Description}`);
        console.log("----\n");

        const iterator = this.createIterator();
        while (iterator.hasNext()) {
            // console.log(iterator.current().value._Name);
            iterator.current().value.print();
            iterator.next();
        }
    }

    public createIterator(): Iterator<ArrayList<MenuComponent>, MenuComponent> {
        return new ArrayListComponentIterator(this.menuComponents);
    }
}
