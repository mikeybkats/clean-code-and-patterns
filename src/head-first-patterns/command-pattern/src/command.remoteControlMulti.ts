import { ICommand } from "./command.props";

class EmptyCommand implements ICommand {
    name: string;
    public execute() {}
    public undo() {}
}

// invoker
export class RemoteControlMulti {
    onCommands: ICommand[];
    offCommands: ICommand[];

    constructor() {
        this.onCommands = new Array(7);
        this.offCommands = new Array(7);

        const emptyCommand: ICommand = new EmptyCommand();

        for (let i = 0; i < 7; i++) {
            this.offCommands[i] = emptyCommand;
            this.onCommands[i] = emptyCommand;
        }
    }

    public setOnCommand(
        onCommand: ICommand,
        offCommand: ICommand,
        slot: number
    ): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    public onButtonWasPressed(slot: number): void {
        this.onCommands[slot].execute();
    }

    public offButtonWasPressed(slot: number): void {
        this.offCommands[slot].execute();
    }

    public printSlots(): string[] {
        return this.onCommands.map((command, index) => {
            return `slot ${index} --- on: ${this.onCommands[index].name} --- off: ${this.offCommands[index].name}\n`;
        });
    }
}

console.log(new RemoteControlMulti());
