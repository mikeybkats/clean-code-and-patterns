import { ArrayList } from "./iterator.arrayList";
import { IMenuItem } from "./iterator.menuItems.props";

interface IMenuIterator<T> {
    hasNext: () => boolean;
    next: () => IMenuItem;
    current: () => IMenuItem;
    _index: number;
    _menuItems: T;
}

export abstract class Iterator<T> implements IMenuIterator<T> {
    private menuItems: T;
    private index: number;

    public get _index(): number {
        return this.index;
    }

    public set _index(value: number) {
        this.index = value;
    }

    public get _menuItems(): T {
        return this.menuItems;
    }

    public set _menuItems(items: T) {
        this.menuItems = items;
    }

    abstract next(): IMenuItem;
    abstract current(): IMenuItem;
    abstract hasNext(): boolean;
}

/**
 * Creates an iterator to navigate data lists for our food menu system.
 *
 * @param T
 * The constructor takes a list of menu items. The menu items should be formatted using IMenuItem interface
 *
 * for default behavior.
 */
export class DinnerMenuIterator extends Iterator<IMenuItem[]> {
    constructor(items: IMenuItem[]) {
        super();
        this._menuItems = items;
        this._index = 0;
    }

    /**
     * returns the next node
     */
    public next(): IMenuItem {
        const menuItem = this._menuItems[this._index];
        this._index = this._index + 1;
        return menuItem;
    }

    /**
     * returns true if there is a next node or false if there is not a next node
     */
    public hasNext(): boolean {
        if (this._index >= this._menuItems.length) {
            return false;
        } else return true;
    }

    /**
     * returns the current node
     */
    public current(): IMenuItem {
        return this._menuItems[this._index];
    }
}

export class BreakfastMenuIterator extends Iterator<ArrayList<IMenuItem>> {
    constructor(items: ArrayList<IMenuItem>) {
        super();
        this._menuItems = items;
        this._index = 0;
    }

    /**
     * returns the next node
     */
    public next(): IMenuItem {
        const menuItem = this._menuItems.get(this._index).data;
        this._index = this._index + 1;
        return menuItem;
    }

    /**
     * returns the current node
     */
    public current(): IMenuItem {
        return this._menuItems.get(this._index).data;
    }

    /**
     * returns true if there is a next node or false if there is not a next node
     */
    public hasNext(): boolean {
        if (this._index >= this._menuItems.size()) {
            return false;
        } else return true;
    }
}
