//variable with annotation:
//variable of type: string, number, boolean, undefined, null, any

const myName: string = 'priyo';
console.log(myName);
let numberDefined: number = 10;
console.log(numberDefined);
numberDefined = -1000;
console.log(numberDefined);
const yes: boolean = true;
console.log(yes);

// TypeScript infers the types of variables based on their initialization values and usage.
// This helps catch potential type - related errors during development and provides better tooling support.
//type inference: Ts forcefully annotate this type as string;
let numberOne = 1;
// numberOne = 'One';--error TS2322: Type 'string' is not assignable to type 'number'.

const add = (a: number, b: number): number => {
    console.log(a + b);
    return a + b;
}

add(17, 34);

const joinStrings = (s1: string, s2: string): string => {
    console.log(s1 + s2);
    return s1 + s2;
}

joinStrings("abc", "bca");

const joinNumbers = (s1: number, s2: number): string => {
    console.log(String(s1) + s2);
    return String(s1) + s2;
}

joinNumbers(12, 123);

//introduction on interface

interface Post {

    title: string,
    dateOf: string
    published: boolean

}

const post: Post = {
    title: 'test result',
    dateOf: '12-05-2023',
    published: true
}

const printPost = (postToBePrinted: Post) => {
    return `${postToBePrinted.title}`
}

console.log(printPost(post));


