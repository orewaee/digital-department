const foo = (a: string, b: string, c: string): string => {
    return a + b + c;
};

const bar: string = foo("x", "y", "z");
console.log(bar);

const bool: boolean = true;
console.log(typeof bool, bool);

let num: number = 21;
console.log(typeof num, num);

interface Entity {
    id: number;
}

interface ToJsonStringify extends Entity {
    e1: string;
    e2: string;
}

const data: ToJsonStringify = {
    id: 2,
    e1: "Поле 1",
    e2: "Поле 2"
}

class ExtendedJSON implements JSON {
    readonly [Symbol.toStringTag]: string;

    stringify(value: unknown, replacer?: unknown, space?: unknown): string {
        return "";
    }

    parse(text: string, reviver?: (this: any, key: string, value: any) => any) {
        return text;
    }

    foo(): string {
        return "123";
    }

    
}

const exJSON: ExtendedJSON = new ExtendedJSON();


const json: string = JSON.stringify(data);
console.log(json);

console.log(exJSON.foo());
