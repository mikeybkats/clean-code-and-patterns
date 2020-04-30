enum Occupation {
    DOCTOR = "doctor",
    LAWER = "lawer",
    POLITICIAN = "politician",
    SCIENTIST = "scientist",
    CRIMINAL = "criminal",
    BURGLAR = "burglar",
    JEDI = "jedi knight",
}

interface ICharacterProps {
    occupation: Occupation;
    age: number;
    weight: number;
    height: number;
    name: string;
}

enum SkillDescription {
    KNIFE = "A steady hand on the hilt of a knife is must in certain lines of work.",
    PICKPOCKET = "The diversion and the obfuscation of the target's attention lends the perfect environment for a succesful take.",
}

abstract class Character {
    private description: string = "A generic human with no skills.";
    private occupation: Occupation;
    private age: number;
    private weight: number;
    private height: number;
    private level: number = 0;
    private skills: string[] = [];
    private health: number = 1;
    private name: string;

    constructor(character: ICharacterProps) {
        this.age = character.age;
        this.occupation = character.occupation;
        this.weight = character.weight;
        this.height = character.height;
        this.name = character.name;
    }

    public calculateHealth(): void {
        this.health = this.level - this.age + 20;
    }

    public get _description(): string {
        return this.description;
    }
    public set _description(description: string) {
        this.description = description;
    }

    public get _age(): number {
        return this.age;
    }
    public set _age(age: number) {
        this.age = age;
    }
    public get _height(): number {
        return this.height;
    }
    public set _height(height: number) {
        this.height = height;
    }
    public get _weight(): number {
        return this.weight;
    }
    public set _weight(weight: number) {
        this.weight = weight;
    }
    public get _name(): string {
        return this.name;
    }
    public get _occupation(): Occupation {
        return this.occupation;
    }
}

abstract class CharacterSkillDecorator extends Character {
    public abstract skillDescription: string;
    public abstract get _description(): string;
    public abstract get _skillDescription(): string;
    public abstract set _skillDescription(description: string);
}

export class Burglar extends Character {
    constructor(props: ICharacterProps) {
        super(props);
    }
}

export class KnifeSkill extends CharacterSkillDecorator {
    private baseCharacter: Character;
    public skillDescription: SkillDescription;

    constructor(character: Character) {
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

    public get _description(): string {
        return this.baseCharacter._description;
    }

    public get _skillDescription(): SkillDescription {
        return this.skillDescription;
    }

    public get _occupation(): Occupation {
        return this.baseCharacter._occupation;
    }

    public set _skillDescription(skill: SkillDescription) {
        this.skillDescription = skill;
    }
}

export const bilboProps: ICharacterProps = {
    name: "bilbo",
    height: 46,
    weight: 105,
    age: 40,
    occupation: Occupation.JEDI,
};

const bilbo = new Burglar(bilboProps);
bilbo._description = "A nice ol chap. and a " + bilbo._occupation;
console.log(bilbo._name + ": " + bilbo._description);

const bilboWithKnifeSkill = new KnifeSkill(bilbo);
console.log(bilboWithKnifeSkill._skillDescription);

// const bilboWPPSkill = new PPSkill(bilboWithKnifeSkill);
