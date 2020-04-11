"use strict";
class ConcreteSubject {
    constructor() {
        this.subjectState = {
            someKey: 0,
        };
    }
    // how does this all work?
    registerObserver() { }
    removeObserver() { }
    notifyObserver() { }
    get state() {
        return this.subjectState.someKey;
    }
    set state(value) {
        this.subjectState.someKey = value;
    }
}
class ConcreteObserver {
    update() { }
}
class ConcreteObserver2 {
    update() { }
}
class ConcreteObserver3 {
    update() { }
}
