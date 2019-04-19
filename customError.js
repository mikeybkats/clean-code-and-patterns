class Car {
  constructor(color, type, age){
    this.color = color,
    this.type = type, 
    this.age = age

    get type(){
      return this.type;
    }
    set type(val){
      this.type = val;
    }

    if(!color){
      try {
        throw{
          name: "color error",
          message: "you must supply a color for your car"
        }
      }
      catch (e){
        console.log(e.message);
      }
    }
  }
}

var myCar = new Car(undefined, "jag", "10");
// this will throw the error message
