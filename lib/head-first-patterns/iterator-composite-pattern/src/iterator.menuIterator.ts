import { ArrayList } from "./iterator.arrayList";
import { IMenuItem } from "./iterator.menuItems.props";

interface IMenuIterator<T> {
    hasNext: () => boolean;
    next: () => T;
    current: () => T;
}

/**
 * Creates an iterator to navigate data lists for our food menu system.
 *
 * @param T
 * The constructor takes a list of menu items. The menu items should be formatted using IMenuItem interface
 * for default behavior.
 */
export class DinnerMenuIterator<T> implements IMenuIterator<T> {
    private menuItems: T[];
    private index: number;

    constructor(items: T[]) {
        this.menuItems = items;
        this.index = 0;
    }

    /**
     * returns the next node
     */
    public next(): T {
        const menuItem = this.menuItems[this.index];
        this.index = this.index + 1;
        return menuItem;
    }

    /**
     * returns the current node
     */
    public current(): T {
        return this.menuItems[this.index];
    }

    /**
     * returns true if there is a next node or false if there is not a next node
     */
    public hasNext(): boolean {
        if (this.index >= this.menuItems.length) {
            return false;
        } else return true;
    }
}

/**
 * Creates an iterator to navigate data lists for our food menu system.
 *
 * @param T
 * The constructor takes a list of menu items. The menu items should be formatted using IMenuItem interface
 * for default behavior.
 */
export class BreakfastMenuIterator<IMenuItem>
    implements IMenuIterator<IMenuItem> {
    private menuItems: ArrayList<IMenuItem>;
    private index: number;

    constructor(items: ArrayList<IMenuItem>) {
        this.menuItems = items;
        this.index = 0;
    }

    /**
     * returns the next node
     */
    public next(): IMenuItem {
        const menuItem = this.menuItems.get(this.index).data;
        this.index = this.index + 1;
        return menuItem;
    }

    /**
     * returns the current node
     */
    public current(): IMenuItem {
        return this.menuItems.get(this.index).data;
    }

    /**
     * returns true if there is a next node or false if there is not a next node
     */
    public hasNext(): boolean {
        if (this.index >= this.menuItems.size()) {
            return false;
        } else return true;
    }
}
