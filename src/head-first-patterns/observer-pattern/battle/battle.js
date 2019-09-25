"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Battle = /** @class */ (function () {
    function Battle() {
        this.battleState = {
            // how many total player turns ?
            numberOfTurns: 0,
            // who's turn is it?
            attackerIndex: 0,
            // who are they attacking? P or E?
            attackTargetIndex: 0,
        };
        this.observers = new Array();
    }
    Battle.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
        this.resetNumberOfTurns();
    };
    Battle.prototype.removeObserver = function (observer) {
        this.observers = this.observers.filter(function (targetObserver) {
            targetObserver !== observer;
        });
        this.resetNumberOfTurns();
    };
    Battle.prototype.notifyObservers = function () {
        var _this = this;
        this.observers.forEach(function (observer) {
            observer.update(_this.battleState);
        });
    };
    Battle.prototype.attack = function () {
        console.log(this.observers[this.attackerIndex].name + " attacks " + this.observers[this.attackTargetIndex].name);
        this.observers[this.battleState.attackTargetIndex].receiveAttack(this.battleState);
    };
    Battle.prototype.resetNumberOfTurns = function () {
        this.battleState.numberOfTurns = this.observers.length;
    };
    Object.defineProperty(Battle.prototype, "_battleState", {
        set: function (newBattleState) {
            this.battleState = newBattleState;
            this.notifyObservers();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Battle.prototype, "_attacker", {
        set: function (attackerIndex) {
            this.battleState.attackerIndex = attackerIndex;
            this.notifyObservers();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Battle.prototype, "_attackerTarget", {
        set: function (attackTargetIndex) {
            this.battleState.attackTargetIndex = attackTargetIndex;
            this.notifyObservers();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Battle.prototype, "attackerIndex", {
        get: function () {
            return this.battleState.attackerIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Battle.prototype, "attackTargetIndex", {
        get: function () {
            return this.battleState.attackTargetIndex;
        },
        enumerable: true,
        configurable: true
    });
    return Battle;
}());
exports.Battle = Battle;
