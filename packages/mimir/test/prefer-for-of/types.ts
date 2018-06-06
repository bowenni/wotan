export {};

declare let array: Array<any>;

for (let i = 0; i < array.length; ++i) {
    array[i]
}

declare let readonlyArray: ReadonlyArray<any>;

for (let i = 0; i < readonlyArray.length; ++i) {
    readonlyArray[i]
}

interface MyArray<T = any> extends Array<T> {
    prop: T;
}
declare let myArray: MyArray;

for (let i = 0; i < myArray.length; ++i) {
    myArray[i]
}

declare let myArray2: MyArray<string>;

for (let i = 0; i < myArray2.length; ++i) {
    myArray2[i]
}

interface ArrayLike {
    [index: number]: number;
    length: number;
}

declare let arrayLike: ArrayLike;

for (let i = 0; i < arrayLike.length; ++i) {
    arrayLike[i]
}

declare let typedArray: Uint16Array;

for (let i = 0; i < typedArray.length; ++i) {
    typedArray[i]
}

declare let anyValue: any;

for (let i = 0; i < anyValue.length; ++i) {
    anyValue[i]
}

function test<T extends any[], U, V extends any>(param: T, param2: U, param3: V) {
    for (let i = 0; i < param.length; ++i) {
        param[i]
    }

    let v: T | ReadonlyArray<string> = [];
    for (let i = 0; i < v.length; ++i) {
        v[i]
    }

    for (let i = 0; i < param2.length; ++i) {
        param2[i]
    }

    for (let i = 0; i < param3.length; ++i) {
        param3[i]
    }
}

for (let i = 0; i < "foo".length; ++i) {
    "foo"[i]
}

declare let weirdArray: (MyArray<number> | ReadonlyArray<string>) & {foo: string} | Array<boolean>;

for (let i = 0; i < weirdArray.length; ++i) {
    weirdArray[i]
}

declare let arrayUnion: Array<any> | ArrayLike;

for (let i = 0; i < arrayUnion.length; ++i) {
    arrayUnion[i]
}

{
    interface Array<T> {
        [index: number]: T;
        length: number;
    }
    let shadowedArray: Array<any> = [];
    for (let i = 0; i < shadowedArray.length; ++i) {
        shadowedArray[i]
    }
}
