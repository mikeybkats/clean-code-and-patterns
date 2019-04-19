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
var CounterNew = /** @class */ (function () {
    function CounterNew() {
        this.counter = 0;
    }
    CounterNew.prototype.changeBy = function (val) {
        this.counter += val;
    };
    CounterNew.prototype.increment = function () {
        this.changeBy(1);
    };
    CounterNew.prototype.decrement = function () {
        this.changeBy(-1);
    };
    CounterNew.prototype.value = function () {
        return this.counter;
    };
    return CounterNew;
}());
var MyCounter = new CounterNew();
console.log("emulating private methods with closures: ");
console.log(MyCounter.value()); // logs 0
MyCounter.increment();
MyCounter.increment();
console.log(MyCounter.value()); // logs 2
MyCounter.decrement();
console.log(MyCounter.value()); // logs 1
