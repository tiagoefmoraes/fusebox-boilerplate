export class AccumulatorLibrary {
    private _value: number = 0;

    public add(n: number) {
        this._value += n;
    }

    public getValue(): number {
        return this._value;
    }

    public clear() {
        this._value = 0;
    }
}