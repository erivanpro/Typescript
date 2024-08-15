// Declaring a constant variable userName
const userName = 'Max';
// Attempting to reassign a constant will result in an error
// userName = 'Erivan'; // Error: Assignment to constant variable.
// Declaring a variable age with initial value 30
let age = 30;
// Changing the value of age from 30 to 29
age = 29;
// Function using arrow function syntax and default parameter
const add = (a: number, b: number = 1) => a + b;
// Function type definition using TypeScript syntax
const printOutput: (a: number | string) => void = output => console.log(output);
// Accessing a DOM element and adding an event listener
const button = document.querySelector('button');
if (button) {
  button.addEventListener('click', event => console.log(event));
}
// Using the spread operator to concatenate arrays
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies); // Adds elements of hobbies array to activeHobbies array


// Creating an object
const person = {
  name: 'Max',
  age: 30
};
// Using the spread operator to create a copy of an object
const copiedPerson = { ...person };
