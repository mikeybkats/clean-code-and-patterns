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
        const garageDoorOpenLeft = new command_garageDoor_1.GarageDoorOpenCommand(garageDoorLeft);
        const garageDoorCloseLeft = new command_garageDoor_1.GarageDoorCloseCommand(garageDoorLeft);
        const garageDoorOpenRight = new command_garageDoor_1.GarageDoorOpenCommand(garageDoorRight);
        const garageDoorCloseRight = new command_garageDoor_1.GarageDoorCloseCommand(garageDoorRight);
        // add stereo commands
        const stereoOn = new command_stereo_1.StereoOnWithDac(livingRoomStereo);
        const stereoOff = new command_stereo_1.StereoOffWithDac(livingRoomStereo);
        // set commands
        remoteControl.setCommand({
            slot: 0,
            onCommand: garageDoorOpenLeft,
            offCommand: garageDoorCloseLeft,
        });
        remoteControl.setCommand({
            slot: 1,
            onCommand: garageDoorOpenRight,
            offCommand: garageDoorCloseRight,
        });
        remoteControl.setCommand({
            slot: 2,
            onCommand: livingRoomLightOn,
            offCommand: livingRoomLightOff,
        });
        remoteControl.setCommand({
            slot: 3,
            onCommand: kitchenLightOn,
            offCommand: kitchenLightOff,
        });
        remoteControl.setCommand({
            slot: 4,
            onCommand: stereoOn,
            offCommand: stereoOff,
        });
        console.log(remoteControl.getSlots());
        remoteControl.onButtonWasPressed(0);
        remoteControl.offButtonWasPressed(0);
        remoteControl.onButtonWasPressed(1);
        remoteControl.offButtonWasPressed(1);
        remoteControl.onButtonWasPressed(2);
        remoteControl.offButtonWasPressed(2);
        remoteControl.onButtonWasPressed(3);
        remoteControl.offButtonWasPressed(3);
        remoteControl.onButtonWasPressed(4);
        remoteControl.offButtonWasPressed(4);
    }
}
const myRemote = new RemoteLoader();
myRemote.main();
