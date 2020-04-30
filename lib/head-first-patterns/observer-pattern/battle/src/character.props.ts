import { IObserver } from "./battle.props";
import { IBattleState } from "./battle";

export enum characterState {
    CONSCIOUS = "conscious",
    UNCONSCIOUS = "unconscious",
    DEAD = "dead",
}

export interface ICharacter extends IObserver {
    attackPower: number;
    defense: number;
    hitPointsBase: number;
    hitPointsCurrent: number;
    name: string;
    characterState: characterState;

    receiveAttack: (state: IBattleState) => void;
    calculateCharacterState: (hitPoints: number) => void;
    calculateAttack: (state: IBattleState) => number;
    update: (state: IBattleState) => void;
    display: () => void;
}
