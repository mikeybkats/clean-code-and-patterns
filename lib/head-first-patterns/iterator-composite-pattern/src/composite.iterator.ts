import { IMenuComponent, MenuComponent } from "./composite.menu";
import { ArrayList } from "./iterator.arrayList";

interface IIteratorNode<T> {
    done: boolean;
    value: T;
}

interface IMenuIterator<T, J> {
    hasNext: () => boolean;
    next: () => J;
    current: () => IIteratorNode<J>;
    remove: () => boolean;
    _index: number;
    _menuComponents: T;
}

export abstract class Iterator<T, J> implements IMenuIterator<T, J> {
    private menuComponents: T;
    private index: number;

    public get _index(): number {
        return this.index;
    }

    public set _index(value: number) {
        this.index = value;
    }

    public get _menuComponents(): T {
        return this.menuComponents;
    }

    public set _menuComponents(items: T) {
        this.menuComponents = items;
    }

    abstract next(): J;
    abstract current(): IIteratorNode<J>;
    abstract hasNext(): boolean;
    abstract remove(): boolean;
}

export class ArrayListComponentIterator extends Iterator<
    ArrayList<MenuComponent>,
    MenuComponent
> {
    constructor(components: ArrayList<MenuComponent>) {
        super();
        this._menuComponents = components;
        this._index = 0;
    }

    /**
     * returns the next node
     */
    public next(): MenuComponent {
        const menuItem = this._menuComponents.get(this._index).data;
        this._index = this._index + 1;
        return menuItem;
    }

    /**
     * returns the current node
     */
    public current(): IIteratorNode<MenuComponent> {
        const value: MenuComponent = this._menuComponents.get(this._index).data;
        if (value) {
            return { value, done: false };
        } else return { value: null, done: true };
    }

    /**
     * returns true if there is a next node or false if there is not a next node
     */
    public hasNext(): boolean {
        if (this._index >= this._menuComponents.size()) {
            return false;
        } else return true;
    }

    public remove(): boolean {
        return false;
    }
}
