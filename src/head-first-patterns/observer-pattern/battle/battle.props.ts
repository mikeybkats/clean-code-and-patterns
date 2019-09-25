import { IBattleState } from "./battle";
import { ICharacter } from "./enemy.props";

export interface IBattleScenario {
    registerObserver: (observer: IObserver) => void;
    removeObserver: (observer: IObserver) => void;
    notifyObservers: () => void;
    attack: (index: number) => void;
    observers: IObserver[] & ICharacter[];
}

export interface IObserver {
    update: (state: IBattleState) => void;
}
