// these examples come from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
//
// example 1
// this is an example of lexical scoping 
// Nested functions have access to variables declared in their outer scope.
//
function init() {
  var name = "michael lexical scope";

  function displayName() {
    console.log(name);
  }

  displayName();
}

console.log("lexical scoping example:")
init();


// example 2
// this is an example of a closure
// A closure is the combination of a function and the lexical environment within which that function was declared.

function makeFunction() {
  var name = "michael closure scope";

  function displayName() {
    console.log(name);
  }

  // if we return the function displayName, this function will be called when makeFunction is called.
  return displayName;
}

var myFunction = makeFunction();
console.log("simple closure example:");
myFunction();

// example 3
// Closures are useful because they let you associate some data (the lexical environment) with a function that operates on that data.
//
function makeAdder(x) {
  return function(y) {
    return x+y;
  };
}

// the idea here is that we are returning a function that can then be called later
// instead of just calling a funcion that returns a result
//
var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log("add5(2):", add5(2));
console.log("add10(2):", add10(2));

// example 4 
// emulating private methods with closures
// In previous examples, each closure has had its own lexical environment. Here, though, we create a single lexical environment that is shared by three functions: counter.increment, counter.decrement, and counter.value.

var counter = (
  function() {
    var privateCounter = 0;
    
    function changeBy(val) {
      privateCounter += val;
    }

    return {
      increment: function(){ changeBy(1) },
      decrement: function(){ changeBy(-1)},
      value: function(){ return privateCounter; }
    }
  }
)(); // must be invoked immediately

console.log("emulating private methods with closures: ");
console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1

// example 5
// closure scope chaining
//

// global scope
var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log("closure scope chaining");
console.log(sum(1)(2)(3)(4)); // log 20

// We can also write without anonymous functions:

// global scope
var e = 10;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var s = sum(1);
var s1 = s(2);
var s2 = s1(3);
var s3 = s2(4);
console.log(s3) //log 20
