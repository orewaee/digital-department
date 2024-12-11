export namespace Transport {
    export enum DocType {
        PASSPORT,
        DRIVERS_LICENSE
    }
    
    export interface Owner {
        lastName: string;
        firstName: string;
        middleName: string;
        birthDate: Date;
        docType: DocType;
        docSeries: string;
        docNumber: string;
    
        print(): void;
    }
    
    export interface Vehicle {
        brand: string;
        model: string;
        year: number;
        vin: string;
        regNumber: string;
        owner: Owner;
    
        print(): void;
    }
    
    export class OwnerImpl implements Owner {
        private _lastName: string;
        private _firstName: string;
        private _middleName: string;
        private _birthDate: Date;
        private _docType: DocType;
        private _docSeries: string;
        private _docNumber: string;
    
        constructor(
            lastName: string,
            firstName: string,
            middleName: string,
            birthDate: Date,
            docType: DocType,
            docSeries: string,
            docNumber: string
        ) {
            this._lastName = lastName;
            this._firstName = firstName;
            this._middleName = middleName;
            this._birthDate = birthDate;
            this._docType = docType;
            this._docSeries = docSeries;
            this._docNumber = docNumber;
        }
    
        get lastName() {
            return this._lastName;
        }
        set lastName(value: string) {
            this._lastName = value;
        }
    
        get firstName() {
            return this._firstName;
        }
        set firstName(value: string) {
            this._firstName = value;
        }
    
        get middleName() {
            return this._middleName;
        }
        set middleName(value: string) {
            this._middleName = value;
        }
    
        get birthDate() {
            return this._birthDate;
        }
        set birthDate(value: Date) {
            this._birthDate = value;
        }
    
        get docType() {
            return this._docType;
        }
        set docType(value: DocType) {
            this._docType = value;
        }
    
        get docSeries() {
            return this._docSeries;
        }
        set docSeries(value: string) {
            this._docSeries = value;
        }
    
        get docNumber() {
            return this._docNumber;
        }
        set docNumber(value: string) {
            this._docNumber = value;
        }
    
        print(): void {
            console.log(`Owner:
                ${this._lastName}
                ${this._firstName}
                ${this._middleName}
                ${this._birthDate.toDateString()}
                ${this._docType}
                ${this._docSeries}
                ${this._docNumber}
            `);
        }
    }
    
    export class VehicleImpl implements Vehicle {
        private _brand: string;
        private _model: string;
        private _year: number;
        private _vin: string;
        private _regNumber: string;
        private _owner: Owner;
    
        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            regNumber: string,
            owner: Owner
        ) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._regNumber = regNumber;
            this._owner = owner;
        }
    
        get brand() {
            return this._brand;
        }
        set brand(value: string) {
            this._brand = value;
        }
    
        get model() {
            return this._model;
        }
        set model(value: string) {
            this._model = value;
        }
    
        get year() {
            return this._year;
        }
        set year(value: number) {
            this._year = value;
        }
    
        get vin() {
            return this._vin;
        }
        set vin(value: string) {
            this._vin = value;
        }
    
        get registrationNumber() {
            return this._regNumber;
        }
        set regNumber(value: string) {
            this._regNumber = value;
        }
    
        get owner() {
            return this._owner;
        }
        set owner(value: Owner) {
            this._owner = value;
        }
    
        print(): void {
            console.log(`Vehicle:
                ${this._brand}
                ${this._model}
                ${this._year}
                ${this._vin}
                ${this._regNumber}
            `);
        }
    }
    
    export enum BodyType {
        A, B, C
    }
    
    export enum CarClass {
        X, Y, Z
    }
    
    export interface Car extends Vehicle {
        bodyType: BodyType;
        carClass: CarClass;
    
        print(): void;
    }
    
    export class CarImpl implements Car {
        private _brand: string;
        private _model: string;
        private _year: number;
        private _vin: string;
        private _regNumber: string;
        private _owner: Owner;
        private _bodyType: BodyType;
        private _carClass: CarClass;
    
        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            regNumber: string,
            owner: Owner,
            bodyType: BodyType,
            carClass: CarClass
        ) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._regNumber = regNumber;
            this._owner = owner;
            this._bodyType = bodyType;
            this._carClass = carClass;
        }
    
        get brand() {
            return this._brand;
        }
        set brand(value: string) {
            this._brand = value;
        }
    
        get model() {
            return this._model;
        }
        set model(value: string) {
            this._model = value;
        }
    
        get year() {
            return this._year;
        }
        set year(value: number) {
            this._year = value;
        }
    
        get vin() {
            return this._vin;
        }
        set vin(value: string) {
            this._vin = value;
        }
    
        get regNumber() {
            return this._regNumber;
        }
        set regNumber(value: string) {
            this._regNumber = value;
        }
    
        get owner() {
            return this._owner;
        }
        set owner(value: Owner) {
            this._owner = value;
        }
    
        get bodyType() {
            return this._bodyType;
        }
        set bodyType(value: BodyType) {
            this._bodyType = value;
        }
    
        get carClass() {
            return this._carClass;
        }
        set carClass(value: CarClass) {
            this._carClass = value;
        }
    
        print(): void {
            console.log(`Car:
                ${this._brand}
                ${this._model}
                ${this._year}
                ${this._vin}
                ${this._regNumber}
                ${this._bodyType}
                ${this._carClass}
            `);
        }
    }
    
    export interface Motorbike extends Vehicle {
        frameType: string;
        isSport: boolean;
    
        print(): void;
    }
    
    export class MotorbikeImpl implements Motorbike {
        private _brand: string;
        private _model: string;
        private _year: number;
        private _vin: string;
        private _regNumber: string;
        private _owner: Owner;
        private _frameType: string;
        private _isSport: boolean;
    
        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            regNumber: string,
            owner: Owner,
            frameType: string,
            isSport: boolean
        ) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._regNumber = regNumber;
            this._owner = owner;
            this._frameType = frameType;
            this._isSport = isSport;
        }
    
        get brand() {
            return this._brand;
        }
        set brand(value: string) {
            this._brand = value;
        }
    
        get model() {
            return this._model;
        }
        set model(value: string) {
            this._model = value;
        }
    
        get year() {
            return this._year;
        }
        set year(value: number) {
            this._year = value;
        }
    
        get vin() {
            return this._vin;
        }
        set vin(value: string) {
            this._vin = value;
        }
    
        get regNumber() {
            return this._regNumber;
        }
        set regNumber(value: string) {
            this._regNumber = value;
        }
    
        get owner() {
            return this._owner;
        }
        set owner(value: Owner) {
            this._owner = value;
        }
    
        get frameType() {
            return this._frameType;
        }
        set frameType(value: string) {
            this._frameType = value;
        }
    
        get isSport() {
            return this._isSport;
        }
        set isSport(value: boolean) {
            this._isSport = value;
        }
    
        print(): void {
            console.log(`Motorbike:
                ${this._brand}
                ${this._model}
                ${this._year}
                ${this._vin}
                ${this._regNumber}
                ${this._frameType}
                ${this._isSport}
            `);
        }
    }
    
    export interface VehicleStorage<T extends Vehicle> {
        createdAt: Date;
        vehicles: T[];
    
        getAllVehicles(): T[];
    }
    
    export class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
        private _createdAt: Date;
        private _vehicles: T[];
    
        constructor(createdAt: Date, vehicles: T[] = []) {
            this._createdAt = createdAt;
            this._vehicles = vehicles;
        }
    
        get createdAt(): Date {
            return this._createdAt;
        }
    
        get vehicles(): T[] {
            return this._vehicles;
        }
    
        getAllVehicles(): T[] {
            return this._vehicles;
        }
    }
}
