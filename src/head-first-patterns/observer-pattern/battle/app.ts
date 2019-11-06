import { Battle, BattleController } from "./battle";
import { Slime } from "./enemy";
import { ICharacter } from "./enemy.props";

const battle = new Battle();
const slime = new Slime({
    battle,
    params: {
        name: "Little Slime",
        hitPointsBase: 4,
        hitPointsCurrent: 4,
        defense: 5,
        attackPower: 1,
    },
});
const slime2 = new Slime({
    battle,
    params: {
        name: "Big Slime",
        hitPointsBase: 5,
        hitPointsCurrent: 5,
        defense: 0,
        attackPower: 5,
    },
});
const slime3 = new Slime({
    battle,
    params: {
        name: "Mega Slime",
        hitPointsBase: 10,
        hitPointsCurrent: 10,
        defense: 0,
        attackPower: 10,
    },
});
const slime4 = new Slime({
    battle,
    params: {
        name: "Terminator Slime",
        hitPointsBase: 10,
        hitPointsCurrent: 10,
        defense: 0,
        attackPower: 6,
    },
});
const slime5 = new Slime({
    battle,
    params: {
        name: "Friendly Slime",
        hitPointsBase: 5,
        hitPointsCurrent: 5,
        defense: 0,
        attackPower: 1,
    },
});

const controller = new BattleController(battle);
controller.run();
