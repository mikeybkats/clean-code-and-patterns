import { ICommand } from "./command.props";

export class Light {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    public on(): void {
        console.log("the light is on!");
    }
    public off(): void {
        console.log("the light is off");
    }
}

export class LightOnCommand implements ICommand {
    name: string;
    light: Light;

    public constructor(light: Light) {
        this.light = light;
        this.name = light.name;
    }

    public execute(): void {
        this.light.on();
    }
    public undo(): void {
        this.light.off();
    }
}

export class LightOffCommand implements ICommand {
    name: string;
    light: Light;

    public constructor(light: Light) {
        this.light = light;
        this.name = light.name;
    }

    public execute(): void {
        this.light.off();
    }
    public undo(): void {
        this.light.on();
    }
}
