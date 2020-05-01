interface IListObject<T> {
    index: number;
    data: T;
}

interface IArrayList<T> {
    size: () => number;
    get: (index: number) => IListObject<T>;
    add: (data: T) => void;
}

class ArrayList<T> implements IArrayList<T> {
    private list: IListObject<T>[];

    constructor() {
        this.list = [];
    }

    public add(data: T): void {
        let length = this.size();
        if (length !== 0) {
            length = length + 1;
        }

        this.list.push({
            index: length,
            data,
        });
    }

    public get(index: number): IListObject<T> {
        return this.list[index];
    }

    public size(): number {
        return this.list.length;
    }
}

export { ArrayList };
