"use strict";
// curried add 
// accepts a partial list of arguments
//
const add = (x, y) => {
    //const add = (x: number, y?: number): ((y: number) => number) | number => {
    const oldx = x;
    const oldy = y;
    if (typeof oldy === "undefined") {
        return function (newy) {
            return oldx + newy;
        };
    }
    else {
        return x + y;
    }
};
console.log("type of add: ", typeof add(5));
// type of add: function
console.log("add curried explicitly: ", add(2)(5));
// add curried explicitly: 7
const addImplicitly = (x, y) => {
    if (typeof y === "undefined") {
        return function (newy) {
            return x + newy;
        };
    }
    return x + y;
};
console.log("add implicitly: ", addImplicitly(3)(2));
// can we transform any function into a new one that accepts partial parameters?
// 
function schonfinkelize(fn, ...args) {
    const slice = Array.prototype.slice, stored_args = slice.call(arguments, 1);
    return function () {
        const new_args = slice.call(arguments), args = stored_args.concat(new_args);
        return fn.apply(null, args);
    };
}
const regularAdd = (x, y) => {
    return x + y;
};
// what does the arguments object look like?
//
//add(1,2)
/*
  Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    0: 1
    1: 2
    callee: ƒ add(x,y)
    length: 2
    Symbol(Symbol.iterator): ƒ values()
    __proto__: Object
*/
const newAdd = schonfinkelize(add, 5);
console.log("new add: ", newAdd(5));
// new add: 10
