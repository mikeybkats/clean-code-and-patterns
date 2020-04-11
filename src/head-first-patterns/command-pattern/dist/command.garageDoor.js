"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// garageDoor is the reciever
class GarageDoor {
    constructor(name) {
        this.name = name;
    }
    up() {
        console.log("Garage door goes up... it's open.");
    }
    down() {
        console.log("Garage door goes down... it's closed.");
    }
}
exports.GarageDoor = GarageDoor;
// garageDoorOpenCommand is the invoker
class GarageDoorOpenCommand {
    constructor(garageDoor) {
        this.garageDoor = garageDoor;
        this.name = garageDoor.name;
    }
    execute() {
        this.garageDoor.up();
    }
    undo() {
        this.garageDoor.down();
    }
}
exports.GarageDoorOpenCommand = GarageDoorOpenCommand;
class GarageDoorCloseCommand {
    constructor(garageDoor) {
        this.garageDoor = garageDoor;
        this.name = garageDoor.name;
    }
    execute() {
        this.garageDoor.down();
    }
    undo() {
        this.garageDoor.up();
    }
}
exports.GarageDoorCloseCommand = GarageDoorCloseCommand;
