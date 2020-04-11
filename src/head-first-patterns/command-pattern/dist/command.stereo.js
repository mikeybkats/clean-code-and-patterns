"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stereo {
    constructor(name) {
        this.name = name;
    }
    on() {
        console.log("Stereo on.");
    }
    off() {
        console.log("Stereo off.");
    }
    setDac() {
        if (this.dac) {
            this.dac = false;
            console.log("DAC set off.");
        }
        else {
            this.dac = true;
            console.log("DAC set on.");
        }
    }
    setVolume(amount) {
        console.log(`Setting volume to ${amount}`);
    }
}
exports.Stereo = Stereo;
class StereoOnWithDac {
    constructor(stereo) {
        this.stereo = stereo;
        this.name = stereo.name;
    }
    execute() {
        this.stereo.on();
        this.stereo.setDac();
        this.stereo.setVolume(11);
    }
    undo() {
        this.stereo.off();
        this.stereo.setDac();
        this.stereo.setVolume(0);
    }
}
exports.StereoOnWithDac = StereoOnWithDac;
class StereoOffWithDac {
    constructor(stereo) {
        this.stereo = stereo;
        this.name = stereo.name;
    }
    execute() {
        this.stereo.off();
        this.stereo.setDac();
        this.stereo.setVolume(0);
    }
    undo() {
        this.stereo.on();
        this.stereo.setDac();
        this.stereo.setVolume(11);
    }
}
exports.StereoOffWithDac = StereoOffWithDac;
