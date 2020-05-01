interface IListObject {
    index: number;
    data: {};
}

interface IArrayList<T> {
    size: () => number;
    get: (index: number) => IListObject;
    add: (data: T) => void;
}

class ArrayList<T> implements IArrayList<T> {
    private list: IListObject[];

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

    public get(index: number): IListObject {
        return this.list[index];
    }

    public size(): number {
        return this.list.length;
    }
}

export { ArrayList };
