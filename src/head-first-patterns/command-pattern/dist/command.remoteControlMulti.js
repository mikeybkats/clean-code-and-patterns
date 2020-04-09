"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmptyCommand {
    execute() { }
    undo() { }
}
// invoker
class RemoteControlMulti {
    constructor() {
        this.onCommands = new Array(7);
        this.offCommands = new Array(7);
        const emptyCommand = new EmptyCommand();
        for (let i = 0; i < 7; i++) {
            this.offCommands[i] = emptyCommand;
            this.onCommands[i] = emptyCommand;
        }
        // this doesn't work because...
        // for each does not iterate over sparse arrays
        // new Array(7).forEach((command, index) => {
        //     console.log("i'm running");
        //     // this.onCommands[index] = emptyCommand;
        // });
    }
    setOnCommand(command, index) {
        this.onCommands[index] = command;
    }
}
exports.RemoteControlMulti = RemoteControlMulti;
console.log(new RemoteControlMulti());
