import { ICommand } from "./command.props";

export class EmptyCommand implements ICommand {
    name: string;
    constructor() {
        this.name = "Empty command slot";
    }
    public execute(): void {
        console.log("No exectution");
    }
    public undo(): void {
        console.log("No undo");
    }
}

interface ISetCommandArgs {
    onCommand: ICommand;
    offCommand: ICommand;
    slot: number;
}

interface IRemoteControl {
    onCommands: ICommand[];
    offCommands: ICommand[];
    setCommand: (args: ISetCommandArgs) => void;
}

// invoker
export class RemoteControlMulti implements IRemoteControl {
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

    public setCommand(commandArgs: ISetCommandArgs): void {
        this.onCommands[commandArgs.slot] = commandArgs.onCommand;
        this.offCommands[commandArgs.slot] = commandArgs.offCommand;
    }

    public onButtonWasPressed(slot: number): void {
        this.onCommands[slot].execute();
    }

    public offButtonWasPressed(slot: number): void {
        this.offCommands[slot].execute();
    }

    public getSlots(): string[] {
        return this.onCommands.map((command, index) => {
            return `slot ${index} --- on: ${this.onCommands[index].name} --- off: ${this.offCommands[index].name}`;
        });
    }
}
