import { RemoteControlWithUndo } from "./command.remoteControlMultiWithUndo";
import {
    CeilingFanHighSpeed,
    CeilingFanLowSpeed,
    CeilingFanOff,
    CeilingFan,
} from "./command.ceilingFan";

class RemoteLoaderFan {
    public main(): void {
        const remoteControl = new RemoteControlWithUndo();

        const ceilingFan = new CeilingFan("Living Room Ceiling Fan");
        const ceilingFanLivingRoomHigh = new CeilingFanHighSpeed(ceilingFan);
        const ceilingFanLivingRoomLow = new CeilingFanLowSpeed(ceilingFan);
        const ceilingFanLivingRoomOff = new CeilingFanOff(ceilingFan);

        remoteControl.setCommand({
            slot: 0,
            // onCommand: () => { ceilingFan.low},
            onCommand: ceilingFanLivingRoomLow,
            offCommand: ceilingFanLivingRoomOff,
        });
        remoteControl.setCommand({
            slot: 1,
            onCommand: ceilingFanLivingRoomHigh,
            offCommand: ceilingFanLivingRoomOff,
        });

        remoteControl.onButtonWasPressed(0);
        remoteControl.offButtonWasPressed(0);
        console.log(remoteControl.getSlots());
        remoteControl.undoButtonWasPress();

        remoteControl.onButtonWasPressed(1);
        remoteControl.offButtonWasPressed(1);
        console.log(remoteControl.getSlots());
        remoteControl.undoButtonWasPress();
    }
}

const myRemote = new RemoteLoaderFan();
myRemote.main();
