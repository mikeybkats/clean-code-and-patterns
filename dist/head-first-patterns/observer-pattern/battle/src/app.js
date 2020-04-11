"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const battle_1 = require("./battle");
const enemy_1 = require("./enemy");
const battle = new battle_1.Battle();
const slime = new enemy_1.Slime({
    battle,
    params: {
        name: "Little Slime",
        hitPointsBase: 4,
        hitPointsCurrent: 4,
        defense: 5,
        attackPower: 1,
    },
});
const slime2 = new enemy_1.Slime({
    battle,
    params: {
        name: "Big Slime",
        hitPointsBase: 5,
        hitPointsCurrent: 5,
        defense: 0,
        attackPower: 5,
    },
});
const slime3 = new enemy_1.Slime({
    battle,
    params: {
        name: "Mega Slime",
        hitPointsBase: 10,
        hitPointsCurrent: 10,
        defense: 0,
        attackPower: 10,
    },
});
const slime4 = new enemy_1.Slime({
    battle,
    params: {
        name: "Terminator Slime",
        hitPointsBase: 10,
        hitPointsCurrent: 10,
        defense: 0,
        attackPower: 6,
    },
});
const slime5 = new enemy_1.Slime({
    battle,
    params: {
        name: "Friendly Slime",
        hitPointsBase: 5,
        hitPointsCurrent: 5,
        defense: 0,
        attackPower: 1,
    },
});
const controller = new battle_1.BattleController(battle);
controller.run();
