interface IVehicleConstructor {
  make: string;
  model: string;
  color: string;
  year: Years;
  getName: () => string;
  //addYears: () => void;
}

enum Years {
  y1995 = 1995, 
  y1996 = 1996, 
  y1997 = 1997, 
  y1998 = 1998
}

class Vehicle implements IVehicleConstructor {
  make: string;
  model: string;
  color: string;
  year: Years;

  constructor(make: string, model: string, color: string) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  getName() {
    return this.make + " " + this.model;
  }
}

var mySupra: IVehicleConstructor = new Vehicle("toyota", "supra", "red");
mySupra.year = Years.y1995;

//console.log("supra: ", mySupra);
//console.log("get name: ", mySupra.getName());

//mySupra.years.unshift(1994);

//mySupra.year = Vehicle.prototype.years[1];

console.log("supra: ", mySupra);

for (let year in Years){
  console.log("key:", year, "value: ", Years[year]);
}
