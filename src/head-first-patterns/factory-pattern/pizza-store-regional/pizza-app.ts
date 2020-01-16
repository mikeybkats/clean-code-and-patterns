import { NYCPizzaStore, ChicagoPizzaStore } from "./pizza-store";

const NCYPizza = new NYCPizzaStore();
NCYPizza.orderPizza("cheese");

const ChicagoPizza = new ChicagoPizzaStore();
ChicagoPizza.orderPizza("cheese");
