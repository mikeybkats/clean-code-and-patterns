export abstract class AbstractGenericTemplate {
    public templateMethod(): void {
        this.primitiveOperation1();
        this.concreteOperation1();

        this.primitiveOperation2();
        this.concreteOperation2();

        this.hook();
    }

    abstract primitiveOperation1(): void;
    abstract primitiveOperation2(): void;

    public concreteOperation1(): void {
        console.log("operation 1");
    }
    public concreteOperation2(): void {
        console.log("operation 2");
    }

    public hook(): void {
        // hooks do nothing by default
        // the idea is that their behavior can be overridden by the subclass
    }
}
