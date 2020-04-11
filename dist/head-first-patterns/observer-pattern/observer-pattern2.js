"use strict";
class WeatherData {
    constructor() {
        this.weatherState = {
            temperature: 0,
            humidity: 0,
            pressure: 0,
        };
        this.observers = new Array();
    }
    registerObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter((item) => item !== observer);
    }
    notifyObservers() {
        this.observers.forEach((observer) => {
            observer.update(this.weatherState);
        });
    }
    measurementsChanged() {
        this.notifyObservers();
    }
    get temperature() {
        return this.weatherState.temperature;
    }
    get humidity() {
        return this.weatherState.humidity;
    }
    get pressure() {
        return this.weatherState.pressure;
    }
    set measurements(weatherState) {
        this.weatherState = weatherState;
        this.measurementsChanged();
    }
    get measurements() {
        return this.weatherState;
    }
}
class DisplayCurrentConditions {
    constructor(weatherData) {
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    display() {
        console.log("current conditions: \n", "temperature: ", this.temperature, "\n", "humidity: ", this.humidity);
    }
    update(weatherState) {
        this.temperature = weatherState.temperature;
        this.humidity = weatherState.humidity;
        this.display();
    }
}
class DisplayStatistics {
    display() { }
    update(weatherState) { }
}
class DisplayForecast {
    display() { }
    update(weatherState) { }
}
const measurements = {
    temperature: 10,
    humidity: 20,
    pressure: 30,
};
const measurements2 = {
    temperature: 11,
    humidity: 22,
    pressure: 34,
};
const measurements3 = {
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
