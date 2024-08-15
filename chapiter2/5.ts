// Declare a constant variable userName and assign the string 'Max' to it.
const userName = 'Max';
// Declare a variable age and assign the number 30 to it.
let age = 30;
// Update the value of age to 29.
age = 29;
// Declare a constant function add using arrow function syntax.
// It takes two parameters a and b, both of type number, and returns their sum.
const add = (a: number, b: number) => a + b;
// Declare a constant function printOutput using arrow function syntax.
// It takes a parameter output, which can be either a number or a string,
// and logs it to the console.
const printOutput: (a: number | string) => void = output => console.log(output);
// Attempt to select a button element from the document.
// If a button element is found, add a click event listener to it.
const button = document.querySelector('button');
if (button) {
  button.addEventListener('click', event => console.log(event));
}
// Call the printOutput function with the result of add(5, 2).
// This will print 7 to the console.
printOutput(add(5, 2));
