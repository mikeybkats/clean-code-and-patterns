interface ICommand {
    name: string;
    execute: () => void;
    undo: () => void;
}

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
    onCommand: () => void;
    offCommand: () => void;
    slot: number;
}

interface IRemoteControl {
    onCommands: (() => void)[];
    offCommands: (() => void)[];
    setCommand: (args: ISetCommandArgs) => void;
}

// invoker
export class RemoteControlWithUndoMacro implements IRemoteControl {
    onCommands: (() => void)[];
    offCommands: (() => void)[];
    undoCommand: () => void;

    constructor() {
        const commands: (() => void)[] = new Array(7);

        this.onCommands = commands as (() => void)[];
        this.offCommands = commands as (() => void)[];

        const emptyCommand: ICommand = new EmptyCommand();

        for (let i = 0; i < 7; i++) {
            this.offCommands[i] = emptyCommand.execute;
            this.onCommands[i] = emptyCommand.execute;
        }
        this.undoCommand = emptyCommand.execute;
    }

    public setCommand(commandArgs: ISetCommandArgs): void {
        this.onCommands[commandArgs.slot] = commandArgs.onCommand;
        this.offCommands[commandArgs.slot] = commandArgs.offCommand;
    }

    public onButtonWasPressed(slot: number): void {
        this.onCommands[slot]();
        this.undoCommand = this.onCommands[slot];
    }

    public offButtonWasPressed(slot: number): void {
        this.offCommands[slot]();
        this.undoCommand = this.offCommands[slot];
    }

    public undoButtonWasPress(): void {
        this.undoCommand();
    }

    public getSlots(): string[] {
        return this.onCommands.map((command, index) => {
            return `slot ${index} --- on: ${this.onCommands[index].name} --- off: ${this.offCommands[index].name}`;
        });
    }
}
