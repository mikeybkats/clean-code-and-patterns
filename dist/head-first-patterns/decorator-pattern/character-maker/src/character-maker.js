"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Occupation;
(function (Occupation) {
    Occupation["DOCTOR"] = "doctor";
    Occupation["LAWER"] = "lawer";
    Occupation["POLITICIAN"] = "politician";
    Occupation["SCIENTIST"] = "scientist";
    Occupation["CRIMINAL"] = "criminal";
    Occupation["BURGLAR"] = "burglar";
    Occupation["JEDI"] = "jedi knight";
})(Occupation || (Occupation = {}));
var SkillDescription;
(function (SkillDescription) {
    SkillDescription["KNIFE"] = "A steady hand on the hilt of a knife is must in certain lines of work.";
    SkillDescription["PICKPOCKET"] = "The diversion and the obfuscation of the target's attention lends the perfect environment for a succesful take.";
})(SkillDescription || (SkillDescription = {}));
class Character {
    constructor(character) {
        this.description = "A generic human with no skills.";
        this.level = 0;
        this.skills = [];
        this.health = 1;
        this.age = character.age;
        this.occupation = character.occupation;
        this.weight = character.weight;
        this.height = character.height;
        this.name = character.name;
    }
    calculateHealth() {
        this.health = this.level - this.age + 20;
    }
    get _description() {
        return this.description;
    }
    set _description(description) {
        this.description = description;
    }
    get _age() {
        return this.age;
    }
    set _age(age) {
        this.age = age;
    }
    get _height() {
        return this.height;
    }
    set _height(height) {
        this.height = height;
    }
    get _weight() {
        return this.weight;
    }
    set _weight(weight) {
        this.weight = weight;
    }
    get _name() {
        return this.name;
    }
    get _occupation() {
        return this.occupation;
    }
}
class CharacterSkillDecorator extends Character {
}
class Burglar extends Character {
    constructor(props) {
        super(props);
    }
}
exports.Burglar = Burglar;
class KnifeSkill extends CharacterSkillDecorator {
    constructor(character) {
        const characterProps = {
            age: character._age,
            height: character._height,
            weight: character._weight,
            occupation: character._occupation,
            name: character._name,
        };
        super(characterProps);
        this.baseCharacter = character;
        this.skillDescription = SkillDescription.KNIFE;
    }
    get _description() {
        return this.baseCharacter._description;
    }
    get _skillDescription() {
        return this.skillDescription;
    }
    get _occupation() {
        return this.baseCharacter._occupation;
    }
    set _skillDescription(skill) {
        this.skillDescription = skill;
    }
}
exports.KnifeSkill = KnifeSkill;
exports.bilboProps = {
    name: "bilbo",
    height: 46,
    weight: 105,
    age: 40,
    occupation: Occupation.JEDI,
};
const bilbo = new Burglar(exports.bilboProps);
bilbo._description = "A nice ol chap. and a " + bilbo._occupation;
console.log(bilbo._name + ": " + bilbo._description);
const bilboWithKnifeSkill = new KnifeSkill(bilbo);
console.log(bilboWithKnifeSkill._skillDescription);
// const bilboWPPSkill = new PPSkill(bilboWithKnifeSkill);
