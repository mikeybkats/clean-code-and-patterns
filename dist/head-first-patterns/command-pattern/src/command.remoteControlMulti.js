"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmptyCommand {
    execute() { }
    undo() { }
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
    setOnCommand(onCommand, offCommand, slot) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }
    onButtonWasPressed(slot) {
        this.onCommands[slot].execute();
    }
    offButtonWasPressed(slot) {
        this.offCommands[slot].execute();
    }
    printSlots() {
        return this.onCommands.map((command, index) => {
            return `slot ${index} --- on: ${this.onCommands[index].name} --- off: ${this.offCommands[index].name}\n`;
        });
    }
}
exports.RemoteControlMulti = RemoteControlMulti;
console.log(new RemoteControlMulti());
