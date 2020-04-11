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
        this.name = light.name;
    }
    execute() {
        this.light.on();
    }
    undo() {
        this.light.off();
    }
}
exports.LightOnCommand = LightOnCommand;
class LightOffCommand {
    constructor(light) {
        this.light = light;
        this.name = light.name;
    }
    execute() {
        this.light.off();
    }
    undo() {
        this.light.on();
    }
}
exports.LightOffCommand = LightOffCommand;
