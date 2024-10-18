export class Parameter {
    cueId: string;
    value: number = 0;

    constructor(cueId: string, value: number) {
        this.cueId = cueId;
        this.value = value;

        console.log('Parameter created:', this);
    }
}