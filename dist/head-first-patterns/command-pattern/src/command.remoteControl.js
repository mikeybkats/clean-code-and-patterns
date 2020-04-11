"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_lightSwitch_1 = require("./command.lightSwitch");
const command_garageDoor_1 = require("./command.garageDoor");
// remote control is the invoker
class RemoteControl {
    constructor() { }
    setCommand(command) {
        this.slot = command;
    }
    buttonWasPressed() {
        this.slot.execute();
    }
}
class RemoteControlTest {
    static main(args) {
        const remote = new RemoteControl();
        const myLight = new command_lightSwitch_1.Light("my light");
        const myLightOnCommand = new command_lightSwitch_1.LightOnCommand(myLight);
        remote.setCommand(myLightOnCommand);
        remote.buttonWasPressed();
        const myGarageDoor = new command_garageDoor_1.GarageDoor("my garage door");
        const myGarageDoorCommand = new command_garageDoor_1.GarageDoorOpenCommand(myGarageDoor);
        remote.setCommand(myGarageDoorCommand);
        remote.buttonWasPressed();
    }
}
RemoteControlTest.main();
