var human = {
    hands: 2,
    feet: 2,
    brains: 1
};
if (typeof Object.prototype.clone === "undefined") {
    Object.prototype.clone = function () { };
}
for (var i_1 in human) {
    if (human.hasOwnProperty(i_1)) {
        console.log(i_1, ":", human[i_1]);
    }
}
// can also call off the prototype to get the same result
for (var i in human) {
    if (Object.prototype.hasOwnProperty.call(human, i)) {
        console.log("call ver ", i, ":", human[i]);
    }
}
