import { ICommand } from "./command.props";

// garageDoor is the reciever
export class GarageDoor {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    public up(): void {
        console.log("Garage door goes up... it's open.");
    }
    public down(): void {
        console.log("Garage door goes down... it's closed.");
    }

    // public stop(): void {}
    // public lightOn(): void {}
    // public lightOff(): void {}
}

// garageDoorOpenCommand is the invoker
export class GarageDoorOpenCommand implements ICommand {
    name: string;
    garageDoor: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
        this.name = garageDoor.name;
    }

    public execute(): void {
        this.garageDoor.up();
    }
    public undo(): void {
        this.garageDoor.down();
    }
}

export class GarageDoorCloseCommand implements ICommand {
    name: string;
    garageDoor: GarageDoor;

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
        this.name = garageDoor.name;
    }

    public execute(): void {
        this.garageDoor.down();
    }
    public undo(): void {
        this.garageDoor.up();
    }
}
