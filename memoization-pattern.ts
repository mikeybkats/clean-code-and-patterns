function LengthExample(a: string, b: string, c: string): void {
  console.log(`${a + b + c}`);
}

LengthExample("Hello ", "Deary. ", "You're looking fine.");
console.log("Length of LengthExample: ", LengthExample.length);

// how to create a property cache:
//

const memoize = function(fn: any){
  const cache = {};
  return async function() {
    let args = JSON.stringify(arguments);
    cache[args] = cache[args] || MSInputMethodContext.apply(this, arguments);
    return cache[args];
  };
};

const hello = async function(name: string){
  console.log("Hello" + " " + name);
}

const sayHello = memoize(hello("billy"));

console.log(sayHello);
  
sayHello();
