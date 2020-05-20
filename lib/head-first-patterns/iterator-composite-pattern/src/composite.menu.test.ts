import { Menu } from "./composite.menu";
import { BreakfastMenu } from "./composite.menuBreakfast";
import { SpecialMenu } from "./composite.menuSpecial";
import { DinnerMenu } from "./composite.dinnerMenu";
import { Waitress } from "./composite.waitress";

const allMenus = new Menu({
    name: "All menus",
    description: "A list of all menus.",
});

const thursdayMenu = new SpecialMenu({
    name: "Michael's menu",
    description: "Thursday night dinner.",
});

const dinnerMenu = new DinnerMenu({
    name: "Dinner Menu",
    description: "Our daily dinner items. Served every night.",
});

const breakfastMenu = new BreakfastMenu({
    name: "Breakfast Menu",
    description: "Served from 7am to 11am daily.",
});

allMenus.add(breakfastMenu);
allMenus.add(thursdayMenu);
allMenus.add(dinnerMenu);

const ourWaitress = new Waitress(allMenus);
ourWaitress.print();
