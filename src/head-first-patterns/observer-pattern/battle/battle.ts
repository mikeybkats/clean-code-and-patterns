import { IBattleScenario, IObserver } from "./battle.props";
import { ICharacter } from "./enemy.props";

export interface IBattleState {
    numberOfTurns: number;
    characterTurnIndex: number;
}

export class BattleController {
    battle: IBattleScenario;

    constructor(battle: IBattleScenario) {
        this.battle = battle;
    }

    public run() {
        // the random character chooses who to attack
        const randomPlayer = Math.floor(
            Math.random() * Math.floor(this.battle.observers.length)
        );
        // set the turn to start on the random character
        this.battle._turn = randomPlayer;
        console.log(
            `${this.battle.observers[randomPlayer].name} starts the fight!`
        );

        // random player attacks another random player
        this.battle.attack(this.chooseRandomPlayer(this.battle.observers));

        // until only one observer is left
        while (this.battle.observers.length > 1) {
            console.log(
                `${this.battle.observers[this.battle.turnIndex].name}'s turn! HP: ${this.battle.observers[this.battle.turnIndex].hitPointsCurrent}\/${this.battle.observers[this.battle.turnIndex].hitPointsBase}`
            );
            this.battle.attack(this.chooseRandomPlayer(this.battle.observers));
        }

        if (this.battle.observers.length === 1) {
            console.log(
                `${this.battle.observers[this.battle.turnIndex].name} has won the battle!`
            );
            return 0;
        }
    }

    private chooseRandomPlayer(players: ICharacter[]) {
        let randomPlayer = Math.floor(
            Math.random() * Math.floor(players.length)
        );
        while (randomPlayer === this.battle.turnIndex) {
            randomPlayer = Math.floor(
                Math.random() * Math.floor(players.length)
            );
        }

        return randomPlayer;
    }
}

export class Battle implements IBattleScenario {
    constructor() {
        this.observers = new Array();
    }

    public observers: ICharacter[];

    public battleState: IBattleState = {
        // how many total player turns ?
        numberOfTurns: 0,
        // who's turn is it?
        characterTurnIndex: 0,
    };

    public registerObserver(observer: ICharacter) {
        this.observers.push(observer);
        this.resetNumberOfTurns();
    }

    public removeObserver(observer: ICharacter) {
        console.log(`Removing ${observer.name} from the game!`);
        this.observers = this.observers.filter((targetObserver: IObserver) => {
            return targetObserver.id !== observer.id;
        });
        this.resetNumberOfTurns();
    }

    public notifyObservers() {
        this.observers.forEach((observer: IObserver) => {
            observer.update(this.battleState);
        });
    }

    public attack(targetIndex: number) {
        console.log(
            `${this.observers[this.turnIndex].name} attacks ${this.observers[targetIndex].name}`
        );

        this.observers[targetIndex].receiveAttack(this.battleState);
        this._turn = (this.turnIndex + 1) % this.observers.length;
    }

    public resetNumberOfTurns() {
        this.battleState.numberOfTurns = this.observers.length;
    }

    public set _battleState(newBattleState: IBattleState) {
        this.battleState = newBattleState;
        this.notifyObservers();
    }

    public set _turn(turnIndex: number) {
        this.battleState.characterTurnIndex = turnIndex;
    }

    public get turnIndex(): number {
        return this.battleState.characterTurnIndex;
    }
}
