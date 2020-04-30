interface Subject {
    registerObserver: () => void;
    removeObserver: () => void;
    notifyObserver: () => void;
}

interface Observer {
    update: () => void;
}

class ConcreteSubject implements Subject {
    private subjectState = {
        someKey: 0,
    };

    // how does this all work?
    public registerObserver() {}
    public removeObserver() {}
    public notifyObserver() {}

    get state(): number {
        return this.subjectState.someKey;
    }

    set state(value: number) {
        this.subjectState.someKey = value;
    }
}

class ConcreteObserver implements Observer {
    public update() {}
}

class ConcreteObserver2 implements Observer {
    public update() {}
}

class ConcreteObserver3 implements Observer {
    public update() {}
}
