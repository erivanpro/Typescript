// rest params 
// Declaring a constant variable userName with initial value 'Max'
const userName = 'Max';
// Attempting to reassign a constant will result in an error
// userName = 'Erivan'; // Error: Assignment to constant variable.
// Declaring a variable age with initial value 30
let age = 30;
// Changing the value of age from 30 to 29
age = 29;
/*
// Function definition (commented out)
function add(a: number, b: number) {
  let result;
  result = a + b;
  return result;
}
*/
/*
// Conditional block (commented out)
if (age > 20) {
  let isOld = true;
}

// console.log(isOld); // Error: 'isOld' is not accessible outside of its block scope.
// console.log(result); // Error: 'result' is not accessible outside of its function scope.
*/
/*
// Arrow function definition (commented out)
const add = (a: number, b: number = 1) => a + b;

// Function type definition using TypeScript syntax (commented out)
const printOutput: (a: number | string) => void = output => console.log(output);

// Accessing a DOM element and adding an event listener (commented out)
const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}

// Invoking the printOutput function (commented out)
printOutput(add(5));
*/

// Declaring an array hobbies with initial values 'Sports' and 'Cooking'
const hobbies = ['Sports', 'Cooking'];

// Declaring an array activeHobbies with initial value 'Hiking'
const activeHobbies = ['Hiking'];

// Using the spread operator (...) to push elements of hobbies array into activeHobbies array
activeHobbies.push(...hobbies);

// Declaring an object person with properties name and age
const person = {
  name: 'Max',
  age: 30
};

// Using the spread operator (...) to create a copy of the person object
const copiedPerson = { ...person };

// Arrow function add with rest parameter (...numbers) to sum up numbers
const add = (...numbers: number[]) => {
  // Using reduce to sum up all numbers
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

// Calling the add function with arguments and storing the result in addedNumbers
const addedNumbers = add(5, 10, 2, 3.7);

// Logging the result of addedNumbers to the console
console.log(addedNumbers);
