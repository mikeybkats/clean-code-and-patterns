import { ICommand } from "./command.props";

export class Light {
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
    }

    public execute(): void {
        this.light.on();
    }
    public undo(): void {}
}

export class LightOffCommand implements ICommand {
    name: string;
    light: Light;

    public constructor(light: Light) {
        this.light = light;
    }

    public execute(): void {
        this.light.off();
    }
    public undo(): void {}
}
