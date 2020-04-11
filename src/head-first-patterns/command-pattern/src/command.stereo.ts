import { ICommand } from "./command.props";

export interface IStereo {
    name: string;
    on: () => void;
    off: () => void;
    setDac: () => void;
    setVolume: (amount: number) => void;
    // setTreble: () => void;
    // setStream: () => void;
    // setBass: () => void;
}

export class Stereo implements IStereo {
    name: string;
    dac: boolean;

    constructor(name: string) {
        this.name = name;
    }

    public on(): void {
        console.log("Stereo on.");
    }
    public off(): void {
        console.log("Stereo off.");
    }
    public setDac(): void {
        if (this.dac) {
            this.dac = false;
            console.log("DAC set off.");
        } else {
            this.dac = true;
            console.log("DAC set on.");
        }
    }
    public setVolume(amount: number): void {
        console.log(`Setting volume to ${amount}`);
    }
    // public setTreble(): void {}
    // public setBass(): void {}
    // public setStream(): void {}
}

export class StereoOnWithDac implements ICommand {
    name: string;
    stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
        this.name = stereo.name;
    }

    public execute(): void {
        this.stereo.on();
        this.stereo.setDac();
        this.stereo.setVolume(11);
    }

    public undo(): void {
        this.stereo.off();
        this.stereo.setDac();
        this.stereo.setVolume(0);
    }
}
export class StereoOffWithDac implements ICommand {
    name: string;
    stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
        this.name = stereo.name;
    }

    public execute(): void {
        this.stereo.off();
        this.stereo.setDac();
        this.stereo.setVolume(0);
    }

    public undo(): void {
        this.stereo.on();
        this.stereo.setDac();
        this.stereo.setVolume(11);
    }
}
