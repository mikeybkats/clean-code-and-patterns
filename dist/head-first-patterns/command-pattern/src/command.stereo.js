"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stereo {
    constructor(name) {
        this.name = name;
    }
    on() { }
    off() { }
    setCd() { }
    setStream() { }
    setVolume(amount) { }
    setTreble() { }
    setBass() { }
}
exports.Stereo = Stereo;
class StereoOnWithCd {
    constructor(stereo) {
        this.stereo = stereo;
    }
    execute() {
        this.stereo.on();
        this.stereo.setCd();
        this.stereo.setVolume(11);
    }
    undo() { }
}
exports.StereoOnWithCd = StereoOnWithCd;
