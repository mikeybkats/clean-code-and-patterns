interface IListObject<T> {
    index: number;
    data: T;
}

interface IArrayList<T> {
    size: () => number;
    get: (index: number) => IListObject<T>;
    add: (data: T) => void;
    remove: (data: T) => void;
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

    public remove(data: T): void {
        // console.log(this.list);
        this.list.forEach((value: IListObject<T>, index: number) => {
            if (JSON.stringify(value.data) === JSON.stringify(data)) {
                console.log("removing item", value.data);
                this.list.splice(index, 1);
            }
        });
        // console.log(this.list);
    }

    public get(index: number): IListObject<T> {
        return this.list[index];
    }

    public size(): number {
        return this.list.length;
    }
}

export { ArrayList };
