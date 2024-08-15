// Using const for a constant value that won't change
const userName = 'Max'; // Declaring userName as a constant with initial value 'Max'
// userName = ''; // Error: Assignment to constant variable. Cannot change value of a const

// Using let for a variable that can change
let age = 30; // Declaring age as a variable with initial value 30
age = 29; // Changing the value of age from 30 to 29

// Using let instead of var for better scoping and readability
let x = 10; // Declaring x using let (block-scoped)
function exampleFunction() {
    let y = 20; // Declaring y using let (block-scoped)
    console.log(x); // Output: 10 (let is accessible within the function)
    console.log(y); // Output: 20 (let is accessible within the function)
}

exampleFunction();
console.log(x); // Output: 10 (let is accessible globally within this file)
// console.log(y); // Error: y is not defined (let y is not accessible outside exampleFunction)

