"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmptyCommand {
    constructor() {
        this.name = "Empty command slot";
    }
    execute() {
        console.log("No exectution");
    }
    undo() {
        console.log("No undo");
    }
}
exports.EmptyCommand = EmptyCommand;
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
    }
    setCommand(commandArgs) {
        this.onCommands[commandArgs.slot] = commandArgs.onCommand;
        this.offCommands[commandArgs.slot] = commandArgs.offCommand;
    }
    onButtonWasPressed(slot) {
        this.onCommands[slot].execute();
    }
    offButtonWasPressed(slot) {
        this.offCommands[slot].execute();
    }
    getSlots() {
        return this.onCommands.map((command, index) => {
            return `slot ${index} --- on: ${this.onCommands[index].name} --- off: ${this.offCommands[index].name}`;
        });
    }
}
exports.RemoteControlMulti = RemoteControlMulti;
