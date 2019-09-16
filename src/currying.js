// curried add 
// accepts a partial list of arguments
//
var add = function (x, y) {
    //const add = (x: number, y?: number): ((y: number) => number) | number => {
    var oldx = x;
    var oldy = y;
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
console.log("add curried explicitly: ", add(2)(5));
var addImplicitly = function (x, y) {
    if (typeof y === "undefined") {
        return function (y) {
            return x + y;
        };
    }
    return x + y;
};
console.log("add implicitly: ", addImplicitly(3)(2));
// can we transform any function into a new one that accepts partial parameters?
//
function schonfinkelize(fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var slice = Array.prototype.slice, stored_args = slice.call(arguments, 1);
    return function () {
        var new_args = slice.call(arguments), args = stored_args.concat(new_args);
        return fn.apply(null, args);
    };
}
var regularAdd = function (x, y) {
    return x + y;
};
var newAdd = schonfinkelize(add, 5);
console.log("new add: ", newAdd(5));
