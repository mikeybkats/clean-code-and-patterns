"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// garageDoor is the reciever
class GarageDoor {
    constructor(name) {
        this.name = name;
    }
    up() {
        console.log("Garage door goes up");
    }
    down() {
        console.log("Garage door goes up");
    }
    stop() { }
    lightOn() { }
    lightOff() { }
}
exports.GarageDoor = GarageDoor;
// garageDoorOpenCommand is the invoker
class GarageDoorOpenCommand {
    constructor(garageDoor) {
        this.garageDoor = garageDoor;
    }
    execute() {
        this.garageDoor.up();
    }
    undo() { }
}
exports.GarageDoorOpenCommand = GarageDoorOpenCommand;
