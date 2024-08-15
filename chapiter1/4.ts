/*
Types:
number: All numbers, no distinction between integers or floats.
string: Text.
boolean: true or false.
*/


/* Using JavaScript is going to be wrong because the result of concatenation of these strings 
function add(n1, n2) {
    return n1 + n2;
}
const number1 = '5';
const number2 = 2.8;
const result = add(number1, number2);
console.log(result); // Output will be '52.8' because of string concatenation
*/

/* The solution is using TypeScript for type checking */
function add(n1: number, n2: number): number {
    return n1 + n2;
}
const number1: number = 5; // TypeScript will enforce this to be a number
const number2: number = 2.8;
const result = add(number1, number2);
console.log(result); // Correct output: 7.8


/*
 definition of concatenation :
In programming, concatenation refers to joining two or more strings together to produce a new string.
Thats why we need typescript to prevent that numbers and strings are concatenated.
*/


/* 1 Exercises  */
/*You are given two variables, firstName and lastName. Your task is to concatenate these two variables
 with a space in between to form a full name.
Here's the initial code:
let firstName: string = "John";
let lastName: string = "Doe";
// Your task: create a new variable fullName that is a concatenation of firstName and lastName with a space in between.
Please complete the task and I will check your solution.*/

/*let firstName: string = "John";
let lastName: string = "Doe";
if (typeof firstName !== "string" || typeof lastName !== "string") {
    throw new Error("Expected a string");
}
let fullName: string = firstName + " " + lastName;
*/


