"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Light {
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
