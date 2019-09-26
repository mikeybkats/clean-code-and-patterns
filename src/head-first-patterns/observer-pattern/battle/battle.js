"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BattleController = /** @class */ (function () {
    function BattleController(battle) {
        this.battle = battle;
    }
    BattleController.prototype.run = function () {
        // the random character chooses who to attack
        var randomPlayer = Math.floor(Math.random() * Math.floor(this.battle.observers.length));
        // set the turn to start on the random character
        this.battle._turn = randomPlayer;
        console.log(this.battle.observers[randomPlayer].name + " starts the fight!");
        // random player attacks another random player
        this.battle.attack(this.chooseRandomPlayer(this.battle.observers));
        // until only one observer is left
        while (this.battle.observers.length > 1) {
            console.log(this.battle.observers[this.battle.turnIndex].name + "'s turn! HP: " + this.battle.observers[this.battle.turnIndex].hitPointsCurrent + "/" + this.battle.observers[this.battle.turnIndex].hitPointsBase);
            this.battle.attack(this.chooseRandomPlayer(this.battle.observers));
        }
        if (this.battle.observers.length === 1) {
            console.log(this.battle.observers[this.battle.turnIndex].name + " has won the battle!");
            return 0;
        }
    };
    BattleController.prototype.chooseRandomPlayer = function (players) {
        var randomPlayer = Math.floor(Math.random() * Math.floor(players.length));
        while (randomPlayer === this.battle.turnIndex) {
            randomPlayer = Math.floor(Math.random() * Math.floor(players.length));
        }
        return randomPlayer;
    };
    return BattleController;
}());
exports.BattleController = BattleController;
var Battle = /** @class */ (function () {
    function Battle() {
        this.battleState = {
            // how many total player turns ?
            numberOfTurns: 0,
            // who's turn is it?
            characterTurnIndex: 0,
        };
        this.observers = new Array();
    }
    Battle.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
        this.resetNumberOfTurns();
    };
    Battle.prototype.removeObserver = function (observer) {
        console.log("Removing " + observer.name + " from the game!");
        this.observers = this.observers.filter(function (targetObserver) {
            return targetObserver.id !== observer.id;
        });
        this.resetNumberOfTurns();
    };
    Battle.prototype.notifyObservers = function () {
        var _this = this;
        this.observers.forEach(function (observer) {
            observer.update(_this.battleState);
        });
    };
    Battle.prototype.attack = function (targetIndex) {
        console.log(this.observers[this.turnIndex].name + " attacks " + this.observers[targetIndex].name);
        this.observers[targetIndex].receiveAttack(this.battleState);
        this._turn = (this.turnIndex + 1) % this.observers.length;
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
    Object.defineProperty(Battle.prototype, "_turn", {
        set: function (turnIndex) {
            this.battleState.characterTurnIndex = turnIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Battle.prototype, "turnIndex", {
        get: function () {
            return this.battleState.characterTurnIndex;
        },
        enumerable: true,
        configurable: true
    });
    return Battle;
}());
exports.Battle = Battle;
