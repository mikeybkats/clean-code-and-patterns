interface Subject {
    registerObserver: (observer: Observer) => void;
    removeObserver: (observer: Observer) => void;
    notifyObserver: () => void;
}

interface Observer {
    update: (weatherState: IWeatherState) => void;
}

interface DisplayElement {
    display: () => void;
}

interface IWeatherState {
    temperature: number;
    humidity: number;
    pressure: number;
}

class WeatherData implements Subject {
    private weatherState: IWeatherState = {
        temperature: 0,
        humidity: 0,
        pressure: 0,
    };

    public registerObserver(observer: Observer) {
        // registering
    }
    public removeObserver(observer: Observer) {}
    public notifyObserver() {}

    get temperature(): number {
        return this.weatherState.temperature;
    }
    get humidity(): number {
        return this.weatherState.humidity;
    }
    get pressure(): number {
        return this.weatherState.pressure;
    }
}

class DisplayCurrentConditions implements Observer, DisplayElement {
    public display() {}
    public update(weatherState: IWeatherState) {}
}

class DisplayStatistics implements Observer, DisplayElement {
    public display() {}
    public update(weatherState: IWeatherState) {}
}

class DisplayForecast implements Observer, DisplayElement {
    public display() {}
    public update(weatherState: IWeatherState) {}
}

const dataApp = new WeatherData();
const currentConditions = new DisplayCurrentConditions();
dataApp.registerObserver(currentConditions);
