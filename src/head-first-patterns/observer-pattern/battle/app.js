"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var battle_1 = require("./battle");
var enemy_1 = require("./enemy");
var battle = new battle_1.Battle();
var slime = new enemy_1.Slime({
    battle: battle,
    params: {
        name: "Little Slime",
        hitPointsBase: 4,
        hitPointsCurrent: 4,
        defense: 1,
        attackPower: 1,
    },
});
var slime2 = new enemy_1.Slime({
    battle: battle,
    params: {
        name: "Big Slime",
        hitPointsBase: 5,
        hitPointsCurrent: 5,
        defense: 0,
        attackPower: 5,
    },
});
var slime3 = new enemy_1.Slime({
    battle: battle,
    params: {
        name: "Mega Slime",
        hitPointsBase: 10,
        hitPointsCurrent: 10,
        defense: 10,
        attackPower: 10,
    },
});
var slime4 = new enemy_1.Slime({
    battle: battle,
    params: {
        name: "Terminator Slime",
        hitPointsBase: 100,
        hitPointsCurrent: 100,
        defense: 10,
        attackPower: 10,
    },
});
var controller = new battle_1.BattleController(battle);
controller.run();
