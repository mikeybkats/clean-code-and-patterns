"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("character-maker", [], function (exports_1, context_1) {
    "use strict";
    var Occupation, SkillDescription, Character, CharacterSkillDecorator, Burglar, KnifeSkill, bilboProps, bilbo, bilboWithKnifeSkill;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (Occupation) {
                Occupation["DOCTOR"] = "doctor";
                Occupation["LAWER"] = "lawer";
                Occupation["POLITICIAN"] = "politician";
                Occupation["SCIENTIST"] = "scientist";
                Occupation["CRIMINAL"] = "criminal";
                Occupation["BURGLAR"] = "burglar";
                Occupation["JEDI"] = "jedi knight";
            })(Occupation || (Occupation = {}));
            (function (SkillDescription) {
                SkillDescription["KNIFE"] = "A steady hand on the hilt of a knife is must in certain lines of work.";
                SkillDescription["PICKPOCKET"] = "The diversion and the obfuscation of the target's attention lends the perfect environment for a succesful take.";
            })(SkillDescription || (SkillDescription = {}));
            Character = /** @class */ (function () {
                function Character(character) {
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
                Character.prototype.calculateHealth = function () {
                    this.health = this.level - this.age + 20;
                };
                Object.defineProperty(Character.prototype, "_description", {
                    get: function () {
                        return this.description;
                    },
                    set: function (description) {
                        this.description = description;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Character.prototype, "_age", {
                    get: function () {
                        return this.age;
                    },
                    set: function (age) {
                        this.age = age;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Character.prototype, "_height", {
                    get: function () {
                        return this.height;
                    },
                    set: function (height) {
                        this.height = height;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Character.prototype, "_weight", {
                    get: function () {
                        return this.weight;
                    },
                    set: function (weight) {
                        this.weight = weight;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Character.prototype, "_name", {
                    get: function () {
                        return this.name;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Character.prototype, "_occupation", {
                    get: function () {
                        return this.occupation;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Character;
            }());
            CharacterSkillDecorator = /** @class */ (function (_super) {
                __extends(CharacterSkillDecorator, _super);
                function CharacterSkillDecorator() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return CharacterSkillDecorator;
            }(Character));
            Burglar = /** @class */ (function (_super) {
                __extends(Burglar, _super);
                function Burglar(props) {
                    return _super.call(this, props) || this;
                }
                return Burglar;
            }(Character));
            exports_1("Burglar", Burglar);
            KnifeSkill = /** @class */ (function (_super) {
                __extends(KnifeSkill, _super);
                function KnifeSkill(character) {
                    var _this = this;
                    var characterProps = {
                        age: character._age,
                        height: character._height,
                        weight: character._weight,
                        occupation: character._occupation,
                        name: character._name,
                    };
                    _this = _super.call(this, characterProps) || this;
                    _this.baseCharacter = character;
                    _this.skillDescription = SkillDescription.KNIFE;
                    return _this;
                }
                Object.defineProperty(KnifeSkill.prototype, "_description", {
                    get: function () {
                        return this.baseCharacter._description;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(KnifeSkill.prototype, "_skillDescription", {
                    get: function () {
                        return this.skillDescription;
                    },
                    set: function (skill) {
                        this.skillDescription = skill;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(KnifeSkill.prototype, "_occupation", {
                    get: function () {
                        return this.baseCharacter._occupation;
                    },
                    enumerable: true,
                    configurable: true
                });
                return KnifeSkill;
            }(CharacterSkillDecorator));
            exports_1("KnifeSkill", KnifeSkill);
            exports_1("bilboProps", bilboProps = {
                name: "bilbo",
                height: 46,
                weight: 105,
                age: 40,
                occupation: Occupation.JEDI,
            });
            bilbo = new Burglar(bilboProps);
            bilbo._description = "A nice ol chap. and a " + bilbo._occupation;
            console.log(bilbo._name + ": " + bilbo._description);
            bilboWithKnifeSkill = new KnifeSkill(bilbo);
            console.log(bilboWithKnifeSkill._skillDescription);
        }
    };
});
