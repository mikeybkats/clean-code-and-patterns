import { ICommand } from "./command.props";

// garageDoor is the reciever
export class GarageDoor {
    public up(): void {
        console.log("Garage door goes up");
    }
    public down(): void {}
    public stop(): void {}
    public lightOn(): void {}
    public lightOff(): void {}
}

// garageDoorOpenCommand is the invoker
export class GarageDoorOpenCommand implements ICommand {
    name: string;
    garageDoor: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
    }

    public execute(): void {
        this.garageDoor.up();
    }
    public undo(): void {}
}
