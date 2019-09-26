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
        defense: 1,
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

const controller = new BattleController(battle);
controller.run();
