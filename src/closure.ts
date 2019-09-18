interface ICounter {
  increment: () => void;
  decrement: () => void;
  value: () => number;
}

// non class closure
function CCounter() {
  let counter: number = 0;

  function changeBy(val: number) {
    counter += val;
  }

  return {
    increment: function(): void { changeBy(1); },
    decrement: function(): void { changeBy(-1); },
    value: function(): number { return counter; }
  }
}

// notice that we're not using the new Object() syntax to instantiate. That doesn't work with the above syntax.
const ClosureCounter = CCounter();

console.log("Simulating private functions with closures");
console.log("Starting value: ", ClosureCounter.value());

ClosureCounter.increment();
ClosureCounter.increment();
console.log("new value: ", ClosureCounter.value());
ClosureCounter.increment();
ClosureCounter.increment();

console.log("new value: ", ClosureCounter.value());

const Doggy = function(){
  name: "";

  const bark = () => {
    console.log("woof");
  }
  const giveName = (name) => {
    this.name = name; 
  }

  const sayName = () => {
    console.log(`woof, I'm ${this.name}. Woof!`);
  }
  // if you want the object to work as a constructor with the new MakeObject() notation then you must attach the functions to the object prototype
  Doggy.prototype.giveName = (name) => giveName(name);
  Doggy.prototype.sayName = sayName;
  Doggy.prototype.bark = bark;
}

const myDoggy = new Doggy();
console.log(myDoggy);
myDoggy.bark();
myDoggy.giveName("max");
myDoggy.sayName();
console.log(myDoggy);

const NonConstructorDoggy = function(){
  name: "";

  const bark = () => {
    console.log("woof");
  }
  const giveName = (name) => {
    this.name = name; 
  }

  const sayName = () => {
    console.log(`woof, I'm ${this.name}. Woof!`);
  }

  return {
    giveName: (name) => giveName(name),
    sayName: sayName,
    bark: bark, 
  }
}

const myNonDoggy = NonConstructorDoggy();
myNonDoggy.bark();
myNonDoggy.giveName("Tina");
myNonDoggy.sayName();
console.log(myNonDoggy);

// class closure
class CounterNew {
  private counter: number = 0;

  private changeBy(val: number) {
    this.counter += val;
  }

  public increment(): void { 
    this.changeBy(1); 
  }
  
  public decrement(): void { 
    this.changeBy(-1); 
  }

  public value(): number { 
    return this.counter; 
  }
}

const MyCounter = new CounterNew();

console.log("emulating private methods with classes: ");
console.log(MyCounter.value()); // logs 0
MyCounter.increment();
MyCounter.increment();
console.log(MyCounter.value()); // logs 2
MyCounter.decrement();
console.log(MyCounter.value()); // logs 1
