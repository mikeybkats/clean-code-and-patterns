"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var characterState;
(function (characterState) {
    characterState["CONSCIOUS"] = "conscious";
    characterState["UNCONSCIOUS"] = "unconscious";
    characterState["DEAD"] = "dead";
})(characterState = exports.characterState || (exports.characterState = {}));
class Enemy {
    constructor(props) {
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
    receiveAttack(state) {
        this.hitPointsCurrent = this.calculateAttack(state);
        this.update(state);
    }
    calculateAttack(state) {
        let hitPoints = this.hitPointsCurrent;
        let attack = Math.floor(Math.random() *
            Math.floor(this.battle.observers[state.characterTurnIndex]
                .attackPower)) - this.defense;
        if (attack <= 0) {
            attack = 1;
        }
        console.log(`For ${attack} point${attack > 1 ? "s" : ""} of damage!`);
        return hitPoints - attack;
    }
    calculateCharacterState(hitPoints) {
        if (hitPoints > 0) {
            return characterState.CONSCIOUS;
        }
        if (hitPoints < 0) {
            if (hitPoints <= -5) {
                console.log(`${this.name} has been killed.`);
                return characterState.DEAD;
            }
            console.log(`${this.name} has been knocked unconscious.`);
            return characterState.UNCONSCIOUS;
        }
    }
    update(state) {
        this.characterState = this.calculateCharacterState(this.hitPointsCurrent);
        if (this.characterState === characterState.UNCONSCIOUS ||
            this.characterState === characterState.DEAD) {
            this.battle.removeObserver(this);
        }
    }
    display() {
        console.log(`${this.name} has ${this.hitPointsCurrent} hit points left.`);
    }
    hitPointsBelowBase() {
        if (this.hitPointsCurrent < this.hitPointsBase) {
            return true;
        }
        return false;
    }
    hitPointsAboveBase() {
        if (this.hitPointsCurrent > this.hitPointsBase) {
            return true;
        }
        return false;
    }
    // this set method could be used to set hit points directly if a character gets healed or regenerates or rests at an inn.
    set _hitPoints(points) {
        if (this.hitPointsBelowBase()) {
            this.hitPointsCurrent = this.hitPointsCurrent + points;
            if (this.hitPointsAboveBase()) {
                this.hitPointsCurrent = this.hitPointsBase;
            }
        }
    }
    get _hitPoints() {
        return this.hitPointsCurrent;
    }
}
exports.Enemy = Enemy;
class Slime extends Enemy {
    constructor(props) {
        super(props);
    }
}
exports.Slime = Slime;
//# sourceMappingURL=enemy.js.map