import { ICommand } from "./command.props";

interface Stereo {
    on: () => void;
    off: () => void;
    setCd: () => void;
    setStream: () => void;
    setVolume: (amount: number) => void;
    setTreble: () => void;
    setBass: () => void;
}

class StereoOnWithCd implements ICommand {
    name: string;
    stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    public execute(): void {
        this.stereo.on();
        this.stereo.setCd();
        this.stereo.setVolume(11);
    }

    public undo(): void {}
}
