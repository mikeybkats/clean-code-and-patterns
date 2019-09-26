import { ICharacter } from "./enemy.props";
import { IObserver, IBattleScenario } from "./battle.props";
import { IBattleState } from "./battle";

export enum characterState {
    CONSCIOUS = "conscious",
    UNCONSCIOUS = "unconscious",
    DEAD = "dead",
}

interface IEnemyProps {
    battle: IBattleScenario;
    params?: {
        name: string;
        hitPointsBase?: number;
        hitPointsCurrent?: number;
        defense?: number;
        attackPower?: number;
    };
}

export class Enemy implements IObserver, ICharacter {
    public attackPower: number = 1;
    public defense: number = 1;
    public hitPointsBase: number = 1;
    public hitPointsCurrent: number = 1;
    public name: string = "enemy";
    public id = this.name + Math.floor(Math.random() * Math.floor(100));

    public battle: IBattleScenario;
    public characterState: characterState;

    constructor(props: IEnemyProps) {
        this.battle = props.battle;
        props.battle.registerObserver(this);

        this.characterState = this.calculateCharacterState(
            this.hitPointsCurrent
        );

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

    public receiveAttack(state: IBattleState): void {
        this.hitPointsCurrent = this.calculateAttack(state);
        this.update(state);
    }

    public calculateAttack(state: IBattleState): number {
        let hitPoints = this.hitPointsCurrent;
        let attack =
            Math.floor(
                Math.random() *
                    Math.floor(
                        this.battle.observers[state.characterTurnIndex]
                            .attackPower
                    )
            ) - this.defense;
        if (attack <= 0) {
            attack = 1;
        }
        console.log(`For ${attack} point${attack > 1 ? "s" : ""} of damage!`);
        return hitPoints - attack;
    }

    public calculateCharacterState(hitPoints: number): characterState {
        if (hitPoints > 0) {
            return characterState.CONSCIOUS;
        }
        if (hitPoints < 0) {
            if (hitPoints <= -10) {
                console.log(`${this.name} has been killed.`);
                return characterState.DEAD;
            }
            console.log(`${this.name} has been knocked unconscious.`);
            //console.log(this.battle.observers);
            return characterState.UNCONSCIOUS;
        }
    }

    public update(state: IBattleState): void {
        this.characterState = this.calculateCharacterState(
            this.hitPointsCurrent
        );
        if (
            this.characterState === characterState.UNCONSCIOUS ||
            this.characterState === characterState.DEAD
        ) {
            this.battle.removeObserver(this);
        }
    }

    public display() {
        console.log(
            `${this.name} has ${this.hitPointsCurrent} hit points left.`
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

export class Slime extends Enemy {
    constructor(props: IEnemyProps) {
        super(props);
    }
}
