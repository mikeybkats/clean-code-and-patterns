"use strict";
class WeatherData {
    constructor() {
        this.weatherState = {
            temperature: 0,
            humidity: 0,
            pressure: 0,
        };
    }
    registerObserver(observer) {
        // registering
    }
    removeObserver(observer) { }
    notifyObserver() { }
    get temperature() {
        return this.weatherState.temperature;
    }
    get humidity() {
        return this.weatherState.humidity;
    }
    get pressure() {
        return this.weatherState.pressure;
    }
}
class DisplayCurrentConditions {
    display() { }
    update(weatherState) { }
}
class DisplayStatistics {
    display() { }
    update(weatherState) { }
}
class DisplayForecast {
    display() { }
    update(weatherState) { }
}
const dataApp = new WeatherData();
const currentConditions = new DisplayCurrentConditions();
dataApp.registerObserver(currentConditions);
