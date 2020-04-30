function Vehicle(make, model, color) {
    this.make = make,
        this.model = model,
        this.color = color,
        this.getName = function () {
            return this.make + " " + this.model;
        };
}
var mySupra = new Vehicle("toyota", "supra", "red");
Vehicle.prototype.years = ["1995", "1996", "1997", "1998"];
console.log("supra: ", mySupra);
console.log("get name: ", mySupra.getName());
console.log("Vehicle prototype: ", Vehicle.prototype);
mySupra.years.unshift("1994");
console.log("Vehicle prototype: ", Vehicle.prototype);
mySupra.year = Vehicle.prototype.years[1];
console.log("supra: ", mySupra);
