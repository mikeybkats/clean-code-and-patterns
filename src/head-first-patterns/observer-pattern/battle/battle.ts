import { IBattleScenario, IObserver } from "./battle.props";
import { ICharacter } from "./enemy.props";

export interface IBattleState {
    numberOfTurns: number;
    attackerIndex: number;
    attackTargetIndex: number;
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
        attackerIndex: 0,
        // who are they attacking? P or E?
        attackTargetIndex: 0,
    };

    public registerObserver(observer: ICharacter) {
        this.observers.push(observer);
        this.resetNumberOfTurns();
    }

    public removeObserver(observer: ICharacter) {
        this.observers = this.observers.filter((targetObserver: IObserver) => {
            targetObserver !== observer;
        });
        this.resetNumberOfTurns();
    }

    public notifyObservers() {
        this.observers.forEach((observer: IObserver) => {
            observer.update(this.battleState);
        });
    }

    public attack() {
        console.log(
            `${this.observers[this.attackerIndex].name} attacks ${this.observers[this.attackTargetIndex].name}`
        );

        this.observers[this.battleState.attackTargetIndex].receiveAttack(
            this.battleState
        );
    }

    public resetNumberOfTurns() {
        this.battleState.numberOfTurns = this.observers.length;
    }

    set _battleState(newBattleState: IBattleState) {
        this.battleState = newBattleState;
        this.notifyObservers();
    }

    set _attacker(attackerIndex: number) {
        this.battleState.attackerIndex = attackerIndex;
        this.notifyObservers();
    }

    set _attackerTarget(attackTargetIndex: number) {
        this.battleState.attackTargetIndex = attackTargetIndex;
        this.notifyObservers();
    }

    get attackerIndex(): number {
        return this.battleState.attackerIndex;
    }

    get attackTargetIndex(): number {
        return this.battleState.attackTargetIndex;
    }
}
