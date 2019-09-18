// non class closure
function CCounter() {
    var counter = 0;
    function changeBy(val) {
        counter += val;
    }
    return {
        increment: function () { changeBy(1); },
        decrement: function () { changeBy(-1); },
        value: function () { return counter; }
    };
}
var ClosureCounter = CCounter();
console.log("Simulating private functions with closures");
console.log("Starting value: ", ClosureCounter.value());
ClosureCounter.increment();
ClosureCounter.increment();
console.log("new value: ", ClosureCounter.value());
ClosureCounter.increment();
ClosureCounter.increment();
console.log("new value: ", ClosureCounter.value());
// class closure
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
console.log("emulating private methods with classes: ");
console.log(MyCounter.value()); // logs 0
MyCounter.increment();
MyCounter.increment();
console.log(MyCounter.value()); // logs 2
MyCounter.decrement();
console.log(MyCounter.value()); // logs 1
var Doggy = function () {
    var _this = this;
    name: "";
    var bark = function () {
        console.log("woof");
    };
    var giveName = function (name) {
        _this.name = name;
    };
    var sayName = function () {
        console.log("woof, I'm " + _this.name + ". Woof!");
    };
    // if you want the object to work as a constructor with the new MakeObject() notation then you must attach the functions to the object prototype
    Doggy.prototype.giveName = function (name) { return giveName(name); };
    Doggy.prototype.sayName = sayName;
    Doggy.prototype.bark = bark;
};
var myDoggy = new Doggy();
console.log(myDoggy);
myDoggy.bark();
myDoggy.giveName("max");
myDoggy.sayName();
console.log(myDoggy);
var NonConstructorDoggy = function () {
    var _this = this;
    name: "";
    var bark = function () {
        console.log("woof");
    };
    var giveName = function (name) {
        _this.name = name;
    };
    var sayName = function () {
        console.log("woof, I'm " + _this.name + ". Woof!");
    };
    return {
        giveName: function (name) { return giveName(name); },
        sayName: sayName,
        bark: bark
    };
};
var myNonDoggy = NonConstructorDoggy();
myNonDoggy.bark();
myNonDoggy.giveName("Tina");
myNonDoggy.sayName();
console.log(myNonDoggy);
