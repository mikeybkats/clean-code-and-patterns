import { Battle } from "./battle";
import { Slime } from "./enemy";

const battle = new Battle();
const slime = new Slime(battle, "Slime 1");
const slime2 = new Slime(battle, "Slime 2");

battle._attacker = 1;
battle._attackerTarget = 0;
battle.attack();
slime.display();
slime2.display();

battle._attacker = 0;
battle._attackerTarget = 1;
battle.attack();
slime.display();
slime2.display();
