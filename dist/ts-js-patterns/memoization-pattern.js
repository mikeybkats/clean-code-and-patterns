"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function LengthExample(a, b, c) {
    console.log(`${a + b + c}`);
}
LengthExample("Hello ", "Deary. ", "You're looking fine.");
console.log("Length of LengthExample: ", LengthExample.length);
// how to create a property cache:
//
const memoize = function (fn) {
    const cache = {};
    return function () {
        return __awaiter(this, arguments, void 0, function* () {
            let args = JSON.stringify(arguments);
            cache[args] = cache[args] || MSInputMethodContext.apply(this, arguments);
            return cache[args];
        });
    };
};
const hello = function (name) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Hello" + " " + name);
    });
};
const sayHello = memoize(hello("billy"));
console.log(sayHello);
sayHello();
