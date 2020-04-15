import { RemoteControlWithUndoMacro } from "./command.remoteControlMultiWithUndoMacro";
import { CeilingFan } from "./command.ceilingFan";

class RemoteLoaderFan {
    public main(): void {
        const remoteControl = new RemoteControlWithUndoMacro();

        const ceilingFan = new CeilingFan("Living Room Ceiling Fan");

        remoteControl.setCommand({
            slot: 0,
            onCommand: () => {
                ceilingFan.low;
            },
            offCommand: () => {
                ceilingFan.off;
            },
        });
        remoteControl.setCommand({
            slot: 1,
            onCommand: () => {
                ceilingFan.high;
            },
            offCommand: () => {
                ceilingFan.off;
            },
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
