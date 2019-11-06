import { IObserver } from "./battle.props";
import { characterState } from "./enemy";
import { IBattleState } from "./battle";

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
