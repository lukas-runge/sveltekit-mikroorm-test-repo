export class Parameter {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private _value: any = null;
    private _type: "number" | "boolean";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(value: any, type: "number" | "boolean") {
        this._value = value;
        this._type = type;

        console.log('Parameter created:', this);
    }

    get value() {
        return this._value;
    }
}