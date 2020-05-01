import { IMenuItem } from "./iterator.menuItems.props";
import { FixedLengthMenu } from "./iterator.menuDinner";

export class MenuIterator {
    private menu: IMenuItem[] | FixedLengthMenu;
    private index: number;

    constructor(menu: IMenuItem[] | FixedLengthMenu) {
        this.menu = menu;
    }

    /**
     * returns the next node
     */
    public next(): IMenuItem {
        // for(const i of this.menu){
        //     this.menu.getItem(i)
        // }
        return null;
    }

    /**
     * returns the current node
     */
    public current(): IMenuItem {
        return null;
    }

    /**
     * returns true if there is a next node or false if there is not a next node
     */
    public hasNext(): boolean {
        return false;
    }
}
