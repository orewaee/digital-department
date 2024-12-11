// 1
console.log("#1");

function min(array: number[]): number {
    return array.sort((a, b) => a - b)[0];
}

const array: number[] = [4, 2, 1, -1, 100, -21];

console.log(array, min(array));

function zeros(matrix: number[][]): number {
    let result = 0;

    for (let i = 0; i < matrix.length; i++)
        for (let j = 0; j < matrix[0].length; j++)
            if (matrix[i][j] == 0)
                result++;

    return result;
}

const matrix: number[][] = [
    [1, 0, 9],
    [1, 2, 1],
    [0, 0, 3],
];

console.log(matrix, zeros(matrix));

console.log();


// 2
console.log("#2");

function joinStrings(strings: [string, string, string]): string {
    return strings[0] + strings[1] + strings[2];
}

const strings: [string, string, string] = ["a", "b", "c"];

console.log(strings, joinStrings(strings));

console.log();


// 3
console.log("#3");

enum PrinterType {
    INKJET,
    LASER
}

console.log(PrinterType.LASER);

console.log();


// 4
console.log("#4");

class Pet {
    name: string = 'Some pet';
    age: number = -1;

    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;

    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;

    speak() {
        return "Miyau!";
    }
}

function printPet<T extends Pet>(t: T): void {
    console.log("name = " + t.name);
    console.log("age = " + t.age);

    console.log("speak();");
    console.log(t.speak());
}

printPet(new Dog());
console.log();
printPet(new Cat());

console.log();


// 5
console.log("#5");

interface PrinterModel {
    id: number,
    type: PrinterType,
    description: string
}

const printer: PrinterModel = {
    id: 1,
    type: PrinterType.INKJET,
    description: "super puper printer",
};

const json: string = JSON.stringify(printer);

console.log(json)
