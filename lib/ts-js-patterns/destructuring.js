// destructuring is a quicker and neater way to assign variables to an object
//

// assign variables from objects
const numberObject = {
  a: 10,
  b: 20,
  c: 30
}

// the old way without destructuring
const aa = numberObject.a;
const bb = numberObject.b;
const cc = numberObject.c;

// the new way with destructuring
// names must match the keys
const {a, b, c} = numberObject;

console.log(aa, bb, cc);
console.log(a, b, c);

// array destructuring
//
const numberArray = [10, 20, 30];
const [aaa, bbb, ccc] = numberArray;

console.log( aaa, bbb, ccc);
