var myArray = [1, 2, 3, 4, 5];
Array.prototype.myMap = function (funcArg) {
    var newArray = [];
    for (var i = 0; i < this.length; i++) {
        newArray.push(funcArg(this[i], i));
    }
    return newArray;
};
var newArray = myArray.myMap(function (item, index) {
    return item + index;
});
console.log(newArray);
