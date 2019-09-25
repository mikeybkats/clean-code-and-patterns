import { ICharacter } from "./enemy.props";
import { IObserver, IBattleScenario } from "./battle.props";
import { IBattleState } from "./battle";

export enum characterState {
    CONSCIOUS = "conscious",
    UNCONSCIOUS = "unconscious",
    DEAD = "dead",
}

export class Slime implements IObserver, ICharacter {
    public attackPower: number = 1;
    public defense: number = 1;
    public hitPointsBase: number = 5;
    public hitPointsCurrent: number = 5;
    public name: string = "Slime";

    public battle: IBattleScenario;
    public characterState: characterState;

    constructor(battle: IBattleScenario, name?: string) {
        this.battle = battle;
        battle.registerObserver(this);
        this.characterState = this.calculateCharacterState(
            this.hitPointsCurrent
        );

        if (name) {
            this.name = name;
        }
    }

    public receiveAttack(state: IBattleState): void {
        this.hitPointsCurrent = this.calculateAttack(state);
        this.update(state);
    }

    public calculateAttack(state: IBattleState): number {
        let hitPoints = this.hitPointsCurrent;
        let attack =
            this.battle.observers[state.attackerIndex].attackPower -
            this.defense;
        if (attack <= 0) {
            attack = 1;
        }
        return hitPoints - attack;
    }

    public calculateCharacterState(hitPoints: number): characterState {
        if (hitPoints > 1) {
            return characterState.CONSCIOUS;
        }
        if (hitPoints < 1) {
            if (hitPoints <= -10) {
                return characterState.DEAD;
            }
            return characterState.UNCONSCIOUS;
        }
    }

    public update(state: IBattleState): void {
        this.characterState = this.calculateCharacterState(
            this.hitPointsCurrent
        );
    }

    public display() {
        console.log(
            `${this.name} has ${
                this.hitPointsCurrent
            } hit points remaining. They are currently ${
                this.characterState
            } and ${
                this.characterState === characterState.CONSCIOUS
                    ? "still fighting!"
                    : this.characterState === characterState.UNCONSCIOUS
                    ? "knocked down"
                    : "dead... uh oh. That ain't good"
            }.`
        );
    }

    private hitPointsBelowBase(): boolean {
        if (this.hitPointsCurrent < this.hitPointsBase) {
            return true;
        }
        return false;
    }

    private hitPointsAboveBase(): boolean {
        if (this.hitPointsCurrent > this.hitPointsBase) {
            return true;
        }
        return false;
    }

    // this set method could be used to set hit points directly if a character gets healed or regenerates or rests at an inn.
    set _hitPoints(points: number) {
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
