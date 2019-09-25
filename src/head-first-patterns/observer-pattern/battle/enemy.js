"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var characterState;
(function (characterState) {
    characterState["CONSCIOUS"] = "conscious";
    characterState["UNCONSCIOUS"] = "unconscious";
    characterState["DEAD"] = "dead";
})(characterState = exports.characterState || (exports.characterState = {}));
var Slime = /** @class */ (function () {
    function Slime(battle, name) {
        this.attackPower = 1;
        this.defense = 1;
        this.hitPointsBase = 5;
        this.hitPointsCurrent = 5;
        this.name = "Slime";
        this.battle = battle;
        battle.registerObserver(this);
        this.characterState = this.calculateCharacterState(this.hitPointsCurrent);
        if (name) {
            this.name = name;
        }
    }
    Slime.prototype.calculateAttack = function (state) {
        var hitPoints = this.hitPointsCurrent;
        var attack = this.battle.observers[state.attackerIndex].attackPower -
            this.defense;
        if (attack <= 0) {
            attack = 1;
        }
        return hitPoints - attack;
    };
    Slime.prototype.receiveAttack = function (state) {
        this.hitPointsCurrent = this.calculateAttack(state);
        this.update(state);
    };
    Slime.prototype.calculateCharacterState = function (hitPoints) {
        if (hitPoints > 1) {
            return characterState.CONSCIOUS;
        }
        if (hitPoints < 1) {
            if (hitPoints <= -10) {
                return characterState.DEAD;
            }
            return characterState.UNCONSCIOUS;
        }
    };
    Slime.prototype.update = function (state) {
        this.characterState = this.calculateCharacterState(this.hitPointsCurrent);
    };
    Slime.prototype.display = function () {
        console.log(this.name + " has " + this.hitPointsCurrent + " hit points remaining. They are currently " + this.characterState + " and " + (this.characterState === characterState.CONSCIOUS
            ? "still fighting!"
            : this.characterState === characterState.UNCONSCIOUS
                ? "knocked down"
                : "dead... uh oh. That ain't good") + ".");
    };
    Slime.prototype.hitPointsBelowBase = function () {
        if (this.hitPointsCurrent < this.hitPointsBase) {
            return true;
        }
        return false;
    };
    Slime.prototype.hitPointsAboveBase = function () {
        if (this.hitPointsCurrent > this.hitPointsBase) {
            return true;
        }
        return false;
    };
    Object.defineProperty(Slime.prototype, "_hitPoints", {
        get: function () {
            return this.hitPointsCurrent;
        },
        set: function (points) {
            if (this.hitPointsBelowBase()) {
                this.hitPointsCurrent = this.hitPointsCurrent + points;
                if (this.hitPointsAboveBase()) {
                    this.hitPointsCurrent = this.hitPointsBase;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return Slime;
}());
exports.Slime = Slime;
