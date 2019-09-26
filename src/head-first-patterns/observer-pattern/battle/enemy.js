"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var characterState;
(function (characterState) {
    characterState["CONSCIOUS"] = "conscious";
    characterState["UNCONSCIOUS"] = "unconscious";
    characterState["DEAD"] = "dead";
})(characterState = exports.characterState || (exports.characterState = {}));
var Enemy = /** @class */ (function () {
    function Enemy(props) {
        this.attackPower = 1;
        this.defense = 1;
        this.hitPointsBase = 1;
        this.hitPointsCurrent = 1;
        this.name = "enemy";
        this.id = this.name + Math.floor(Math.random() * Math.floor(100));
        this.battle = props.battle;
        props.battle.registerObserver(this);
        this.characterState = this.calculateCharacterState(this.hitPointsCurrent);
        if (props.params) {
            if (props.params.name) {
                this.name = props.params.name;
            }
            if (props.params.hitPointsBase) {
                this.hitPointsBase = props.params.hitPointsBase;
            }
            if (props.params.hitPointsCurrent) {
                this.hitPointsCurrent = props.params.hitPointsCurrent;
            }
            if (props.params.defense) {
                this.defense = props.params.defense;
            }
            if (props.params.attackPower) {
                this.attackPower = props.params.attackPower;
            }
            this.id = this.name + Math.floor(Math.random() * Math.floor(100));
        }
    }
    Enemy.prototype.receiveAttack = function (state) {
        this.hitPointsCurrent = this.calculateAttack(state);
        this.update(state);
    };
    Enemy.prototype.calculateAttack = function (state) {
        var hitPoints = this.hitPointsCurrent;
        var attack = Math.floor(Math.random() *
            Math.floor(this.battle.observers[state.characterTurnIndex]
                .attackPower)) - this.defense;
        if (attack <= 0) {
            attack = 1;
        }
        console.log("For " + attack + " point" + (attack > 1 ? "s" : "") + " of damage!");
        return hitPoints - attack;
    };
    Enemy.prototype.calculateCharacterState = function (hitPoints) {
        if (hitPoints > 0) {
            return characterState.CONSCIOUS;
        }
        if (hitPoints < 0) {
            if (hitPoints <= -10) {
                console.log(this.name + " has been killed.");
                return characterState.DEAD;
            }
            console.log(this.name + " has been knocked unconscious.");
            //console.log(this.battle.observers);
            return characterState.UNCONSCIOUS;
        }
    };
    Enemy.prototype.update = function (state) {
        this.characterState = this.calculateCharacterState(this.hitPointsCurrent);
        if (this.characterState === characterState.UNCONSCIOUS ||
            this.characterState === characterState.DEAD) {
            this.battle.removeObserver(this);
        }
    };
    Enemy.prototype.display = function () {
        console.log(this.name + " has " + this.hitPointsCurrent + " hit points left.");
    };
    Enemy.prototype.hitPointsBelowBase = function () {
        if (this.hitPointsCurrent < this.hitPointsBase) {
            return true;
        }
        return false;
    };
    Enemy.prototype.hitPointsAboveBase = function () {
        if (this.hitPointsCurrent > this.hitPointsBase) {
            return true;
        }
        return false;
    };
    Object.defineProperty(Enemy.prototype, "_hitPoints", {
        get: function () {
            return this.hitPointsCurrent;
        },
        // this set method could be used to set hit points directly if a character gets healed or regenerates or rests at an inn.
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
    return Enemy;
}());
exports.Enemy = Enemy;
var Slime = /** @class */ (function (_super) {
    __extends(Slime, _super);
    function Slime(props) {
        return _super.call(this, props) || this;
    }
    return Slime;
}(Enemy));
exports.Slime = Slime;
