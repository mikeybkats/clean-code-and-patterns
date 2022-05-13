interface Flight {
    flightHeight: number;
    flightDistance: number;
}

abstract class BirdBase {
    public name: string;
    public type: string;
    
    abstract fly(): Flight;
}

class Duck extends BirdBase {
    name: string;
    type: string;

    constructor(name: string, type: string){
        super();
        this.name = name;
        this.type = type;
    }

    public fly(): Flight {
        return {
            flightHeight: 100,
            flightDistance: 100
        }
    }
}

const reggie = new Duck("Reginold", "Mallard");

console.log(reggie.fly());