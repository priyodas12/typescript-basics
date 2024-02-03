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

