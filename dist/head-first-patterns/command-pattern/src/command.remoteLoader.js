"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_lightSwitch_1 = require("./command.lightSwitch");
const command_stereo_1 = require("./command.stereo");
const command_garageDoor_1 = require("./command.garageDoor");
const command_remoteControlMulti_1 = require("./command.remoteControlMulti");
class RemoteLoader {
    main() {
        const remoteControl = new command_remoteControlMulti_1.RemoteControlMulti();
        const livingRoomLight = new command_lightSwitch_1.Light("Living room");
        const kitchenLight = new command_lightSwitch_1.Light("Kitchen");
        const garageDoorLeft = new command_garageDoor_1.GarageDoor("Garage door 1");
        const garageDoorRight = new command_garageDoor_1.GarageDoor("Garage door 2");
        const livingRoomStereo = new command_stereo_1.Stereo("Living room stereo");
        // add light commands
        const livingRoomLightOn = new command_lightSwitch_1.LightOnCommand(livingRoomLight);
        const livingRoomLightOff = new command_lightSwitch_1.LightOffCommand(livingRoomLight);
        const kitchenLightOn = new command_lightSwitch_1.LightOnCommand(kitchenLight);
        const kitchenLightOff = new command_lightSwitch_1.LightOffCommand(kitchenLight);
        // add garage door commands
        // add stereo commands
    }
}
