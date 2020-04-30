import { ICommand } from "./command.props";

enum FanSpeed {
    HIGH = 3,
    MEDIUM = 2,
    LOW = 1,
    OFF = 0,
}

export class CeilingFan {
    speed: FanSpeed;
    location: string;

    constructor(location: string) {
        this.location = location;
        this.speed = FanSpeed.OFF;
    }

    public high(): void {
        this.speed = FanSpeed.HIGH;
        console.log(`Fan speed set to ${this.speed} / high`);
    }
    public medium(): void {
        this.speed = FanSpeed.MEDIUM;
        console.log(`Fan speed set to ${this.speed} / medium`);
    }
    public low(): void {
        this.speed = FanSpeed.LOW;
        console.log(`Fan speed set to ${this.speed} / low`);
    }
    public off(): void {
        this.speed = FanSpeed.OFF;
        console.log(`Fan set to off`);
    }

    public getSpeed(): number {
        return this.speed;
    }
}

export class CeilingFanOff implements ICommand {
    ceilingFan: CeilingFan;
    name: string;
    prevSpeed: number;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
        this.name = ceilingFan.location + " Off";
    }

    public execute(): void {
        this.prevSpeed = this.ceilingFan.getSpeed();
        this.ceilingFan.off();
    }

    public undo(): void {
        if (this.prevSpeed === FanSpeed.OFF) {
            this.ceilingFan.off();
        }
        if (this.prevSpeed === FanSpeed.LOW) {
            this.ceilingFan.low();
        }
        if (this.prevSpeed === FanSpeed.MEDIUM) {
            this.ceilingFan.medium();
        }
        if (this.prevSpeed === FanSpeed.HIGH) {
            this.ceilingFan.high();
        }
    }
}

export class CeilingFanLowSpeed implements ICommand {
    ceilingFan: CeilingFan;
    name: string;
    prevSpeed: number;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
        this.name = ceilingFan.location + " Low";
    }

    public execute(): void {
        this.prevSpeed = this.ceilingFan.getSpeed();
        this.ceilingFan.low();
    }

    public undo(): void {
        if (this.prevSpeed === FanSpeed.OFF) {
            this.ceilingFan.off();
        }
        if (this.prevSpeed === FanSpeed.LOW) {
            this.ceilingFan.low();
        }
        if (this.prevSpeed === FanSpeed.MEDIUM) {
            this.ceilingFan.medium();
        }
        if (this.prevSpeed === FanSpeed.HIGH) {
            this.ceilingFan.high();
        }
    }
}

export class CeilingFanHighSpeed implements ICommand {
    ceilingFan: CeilingFan;
    name: string;
    prevSpeed: number;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
        this.name = ceilingFan.location + " High";
    }

    public execute(): void {
        this.prevSpeed = this.ceilingFan.getSpeed();
        this.ceilingFan.high();
    }

    public undo(): void {
        if (this.prevSpeed === FanSpeed.OFF) {
            this.ceilingFan.off();
        }
        if (this.prevSpeed === FanSpeed.LOW) {
            this.ceilingFan.low();
        }
        if (this.prevSpeed === FanSpeed.MEDIUM) {
            this.ceilingFan.medium();
        }
        if (this.prevSpeed === FanSpeed.HIGH) {
            this.ceilingFan.high();
        }
    }
}
