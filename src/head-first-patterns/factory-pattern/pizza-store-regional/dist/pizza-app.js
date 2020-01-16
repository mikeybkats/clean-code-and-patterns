"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pizza_store_1 = require("./pizza-store");
const NCYPizza = new pizza_store_1.NYCPizzaStore();
NCYPizza.orderPizza("cheese");
const ChicagoPizza = new pizza_store_1.ChicagoPizzaStore();
ChicagoPizza.orderPizza("cheese");
