import { Light, LightOnCommand, LightOffCommand } from "./command.lightSwitch";
import { Stereo, StereoOnWithDac, StereoOffWithDac } from "./command.stereo";
import {
    GarageDoor,
    GarageDoorOpenCommand,
    GarageDoorCloseCommand,
} from "./command.garageDoor";
import { RemoteControlMulti } from "./command.remoteControlMulti";
import { ICommand } from "./command.props";

class RemoteLoader {
    public main(): void {
        const remoteControl: RemoteControlMulti = new RemoteControlMulti();

        const livingRoomLight: Light = new Light("Living room");
        const kitchenLight: Light = new Light("Kitchen");

        const garageDoorLeft: GarageDoor = new GarageDoor("Garage door 1");
        const garageDoorRight: GarageDoor = new GarageDoor("Garage door 2");

        const livingRoomStereo: Stereo = new Stereo("Living room stereo");

        // add light commands
        const livingRoomLightOn: LightOnCommand = new LightOnCommand(
            livingRoomLight
        );
        const livingRoomLightOff: LightOffCommand = new LightOffCommand(
            livingRoomLight
        );

        const kitchenLightOn: LightOnCommand = new LightOnCommand(kitchenLight);
        const kitchenLightOff: LightOffCommand = new LightOffCommand(
            kitchenLight
        );
        // add garage door commands
        const garageDoorOpenLeft: ICommand = new GarageDoorOpenCommand(
            garageDoorLeft
        );
        const garageDoorCloseLeft: ICommand = new GarageDoorCloseCommand(
            garageDoorLeft
        );
        const garageDoorOpenRight: ICommand = new GarageDoorOpenCommand(
            garageDoorRight
        );
        const garageDoorCloseRight: ICommand = new GarageDoorCloseCommand(
            garageDoorRight
        );

        // add stereo commands
        const stereoOn: StereoOnWithDac = new StereoOnWithDac(livingRoomStereo);
        const stereoOff: StereoOffWithDac = new StereoOffWithDac(
            livingRoomStereo
        );

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
