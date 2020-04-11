"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Light {
    constructor(name) {
        this.name = name;
    }
    on() {
        console.log("the light is on!");
    }
    off() {
        console.log("the light is off");
    }
}
exports.Light = Light;
class LightOnCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.on();
    }
    undo() { }
}
exports.LightOnCommand = LightOnCommand;
class LightOffCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.off();
    }
    undo() { }
}
exports.LightOffCommand = LightOffCommand;
