"use strict";
var Years;
(function (Years) {
    Years[Years["y1995"] = 1995] = "y1995";
    Years[Years["y1996"] = 1996] = "y1996";
    Years[Years["y1997"] = 1997] = "y1997";
    Years[Years["y1998"] = 1998] = "y1998";
})(Years || (Years = {}));
class Vehicle {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }
    getName() {
        return this.make + " " + this.model;
    }
}
var mySupra = new Vehicle("toyota", "supra", "red");
mySupra.year = Years.y1995;
//console.log("supra: ", mySupra);
//console.log("get name: ", mySupra.getName());
//mySupra.years.unshift(1994);
//mySupra.year = Vehicle.prototype.years[1];
console.log("supra: ", mySupra);
for (let year in Years) {
    console.log("key:", year, "value: ", Years[year]);
}
