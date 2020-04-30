import { ICommand } from "./command.props";
import { LightOnCommand, Light } from "./command.lightSwitch";
import { GarageDoor, GarageDoorOpenCommand } from "./command.garageDoor";

// remote control is the invoker
class RemoteControl {
    slot: ICommand;

    constructor() {}

    public setCommand(command: ICommand): void {
        this.slot = command;
    }

    public buttonWasPressed(): void {
        this.slot.execute();
    }
}

class RemoteControlTest {
    public static main(args?: String[]) {
        const remote: RemoteControl = new RemoteControl();

        const myLight: Light = new Light("my light");
        const myLightOnCommand: LightOnCommand = new LightOnCommand(myLight);
        remote.setCommand(myLightOnCommand);
        remote.buttonWasPressed();

        const myGarageDoor: GarageDoor = new GarageDoor("my garage door");
        const myGarageDoorCommand = new GarageDoorOpenCommand(myGarageDoor);
        remote.setCommand(myGarageDoorCommand);
        remote.buttonWasPressed();
    }
}

RemoteControlTest.main();
