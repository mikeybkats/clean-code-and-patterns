interface Subject {
    registerObserver: (observer: Observer) => void;
    removeObserver: (observer: Observer) => void;
    notifyObservers: () => void;
}

// the different kinds and number of observers can vary.
// every new display element is a new observer
interface Observer {
    update: (weatherState: IWeatherState) => void;
}

interface DisplayElement {
    display: () => void;
}

// application state varies
interface IWeatherState {
    temperature: number;
    humidity: number;
    pressure: number;
}

class WeatherData implements Subject {
    observers: Observer[];

    constructor() {
        this.observers = new Array<Observer>();
    }

    private weatherState: IWeatherState = {
        temperature: 0,
        humidity: 0,
        pressure: 0,
    };

    public registerObserver(observer: Observer) {
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer) {
        this.observers = this.observers.filter(
            (item: Observer) => item !== observer
        );
    }

    public notifyObservers() {
        this.observers.forEach((observer: Observer) => {
            observer.update(this.weatherState);
        });
    }

    public measurementsChanged() {
        this.notifyObservers();
    }

    get temperature(): number {
        return this.weatherState.temperature;
    }
    get humidity(): number {
        return this.weatherState.humidity;
    }
    get pressure(): number {
        return this.weatherState.pressure;
    }

    set measurements(weatherState: IWeatherState) {
        this.weatherState = weatherState;
        this.measurementsChanged();
    }

    get measurements(): IWeatherState {
        return this.weatherState;
    }
}

class DisplayCurrentConditions implements Observer, DisplayElement {
    private temperature: number;
    private humidity: number;
    private weatherData: Subject;

    constructor(weatherData: Subject) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    public display() {
        console.log(
            "current conditions: \n",
            "temperature: ",
            this.temperature,
            "\n",
            "humidity: ",
            this.humidity
        );
    }

    public update(weatherState: IWeatherState) {
        this.temperature = weatherState.temperature;
        this.humidity = weatherState.humidity;
        this.display();
    }
}

class DisplayStatistics implements Observer, DisplayElement {
    public display() {}
    public update(weatherState: IWeatherState) {}
}

class DisplayForecast implements Observer, DisplayElement {
    public display() {}
    public update(weatherState: IWeatherState) {}
}

const measurements: IWeatherState = {
    temperature: 10,
    humidity: 20,
    pressure: 30,
};
const measurements2: IWeatherState = {
    temperature: 11,
    humidity: 22,
    pressure: 34,
};
const measurements3: IWeatherState = {
    temperature: 20,
    humidity: 40,
    pressure: 29,
};

const dataApp = new WeatherData();

// on creation DisplayCurrentConditions registers itself to dataApp
const currentConditions = new DisplayCurrentConditions(dataApp);

dataApp.measurements = measurements;
// changes to measurements will now log to console.
dataApp.measurements = measurements2;
dataApp.measurements = measurements3;

// dataApp can remove the currentConditions so it is no longer an observer
dataApp.removeObserver(currentConditions);

// now when we make changes to measurements there is no console log output
dataApp.measurements = measurements3;
