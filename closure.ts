interface ICounter {
  increment: () => void;
  decrement: () => void;
  value: () => number;
}

//const Counter = (
  //function(): ICounter {
    //let counter: number = 0;

    //function changeBy(val: number) {
      //this.counter += val;
    //}

    //return {
      //increment: function(): void { changeBy(1); },
      //decrement: function(): void { changeBy(-1); },
      //value: function(): number { return counter; }
    //}
  //}
//)();

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

console.log("emulating private methods with closures: ");
console.log(MyCounter.value()); // logs 0
MyCounter.increment();
MyCounter.increment();
console.log(MyCounter.value()); // logs 2
MyCounter.decrement();
console.log(MyCounter.value()); // logs 1
