var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BirdBase = /** @class */ (function () {
    function BirdBase() {
    }
    return BirdBase;
}());
var Duck = /** @class */ (function (_super) {
    __extends(Duck, _super);
    function Duck(name, type) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.type = type;
        return _this;
    }
    Duck.prototype.fly = function () {
        return {
            flightHeight: 100,
            flightDistance: 100
        };
    };
    return Duck;
}(BirdBase));
var reggie = new Duck("Reginold", "Mallard");
console.log(reggie.fly());
