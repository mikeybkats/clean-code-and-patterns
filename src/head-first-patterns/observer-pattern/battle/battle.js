"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BattleController {
    constructor(battle) {
        this.battle = battle;
    }
    run() {
        // the random character chooses who to attack
        const randomPlayer = Math.floor(Math.random() * Math.floor(this.battle.observers.length));
        // set the turn to start on the random character
        this.battle._turn = randomPlayer;
        console.log(`${this.battle.observers[randomPlayer].name} starts the fight!`);
        // random player attacks another random player
        this.battle.attack(this.chooseRandomPlayer(this.battle.observers));
        // until only one observer is left
        while (this.battle.observers.length > 1) {
            console.log(`${this.battle.observers[this.battle.turnIndex].name}'s turn! HP: ${this.battle.observers[this.battle.turnIndex].hitPointsCurrent}\/${this.battle.observers[this.battle.turnIndex].hitPointsBase}`);
            this.battle.attack(this.chooseRandomPlayer(this.battle.observers));
        }
        if (this.battle.observers.length === 1) {
            console.log(`${this.battle.observers[this.battle.turnIndex].name} has won the battle!`);
            return 0;
        }
    }
    chooseRandomPlayer(players) {
        let randomPlayer = Math.floor(Math.random() * Math.floor(players.length));
        while (randomPlayer === this.battle.turnIndex) {
            randomPlayer = Math.floor(Math.random() * Math.floor(players.length));
        }
        return randomPlayer;
    }
}
exports.BattleController = BattleController;
class Battle {
    constructor() {
        this.battleState = {
            // how many total player turns ?
            numberOfTurns: 0,
            // who's turn is it?
            characterTurnIndex: 0,
        };
        this.observers = new Array();
    }
    registerObserver(observer) {
        this.observers.push(observer);
        this.resetNumberOfTurns();
    }
    removeObserver(observer) {
        console.log(`Removing ${observer.name} from the game!`);
        this.observers = this.observers.filter((targetObserver) => {
            return targetObserver.id !== observer.id;
        });
        this.resetNumberOfTurns();
    }
    notifyObservers() {
        this.observers.forEach((observer) => {
            observer.update(this.battleState);
        });
    }
    attack(targetIndex) {
        console.log(`${this.observers[this.turnIndex].name} attacks ${this.observers[targetIndex].name}`);
        this.observers[targetIndex].receiveAttack(this.battleState);
        this._turn = (this.turnIndex + 1) % this.observers.length;
    }
    resetNumberOfTurns() {
        this.battleState.numberOfTurns = this.observers.length;
    }
    set _battleState(newBattleState) {
        this.battleState = newBattleState;
        this.notifyObservers();
    }
    set _turn(turnIndex) {
        this.battleState.characterTurnIndex = turnIndex;
    }
    get turnIndex() {
        return this.battleState.characterTurnIndex;
    }
}
exports.Battle = Battle;
//# sourceMappingURL=battle.js.map