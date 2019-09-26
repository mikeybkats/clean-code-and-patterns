import { IBattleState } from "./battle";
import { ICharacter } from "./enemy.props";

export interface IBattleScenario {
    registerObserver: (observer: IObserver) => void;
    removeObserver: (observer: IObserver) => void;
    notifyObservers: () => void;
    attack: (index: number) => void;
    observers: ICharacter[];
    _turn: number;
    turnIndex: number;
}

export interface IObserver {
    update: (state: IBattleState) => void;
    id: string;
}
