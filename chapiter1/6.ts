// Working with numbers, strings, and booleans
// Here we create a function that accepts a third argument as a boolean
// Function to add two numbers and optionally print the result with a phrase
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // Calculate the sum of n1 and n2
    const result = n1 + n2;
    // Check if showResult is true
    if (showResult) {
        // If true, log the phrase concatenated with the result
        console.log(phrase + result);
    } else {
        throw new Error('Invalid input');
    }
}
// Declare a variable number1 as a number
const number1 = 5;
// Declare a variable number2 as a number
const number2 = 2.8;
// Declare a boolean variable to decide whether to print the result
const printResult = true;
// Declare a string variable to hold the result phrase
const resultPhrase = 'Result is: ';
// Convert number1 from string to number using the unary plus operator
// Call the add function with converted number1, number2, printResult, and resultPhrase
add(+number1, number2, printResult, resultPhrase);




/*Sure, here's another exercise for you:
Create a function that accepts two arguments: an array of numbers and a string representing an operation. 
The operations can be "sum", "average", or "product".
If the operation is "sum", the function should return the sum of all numbers in the array.
If the operation is "average", the function should return the average of all numbers in the array. 
If the operation is "product", the function should return the product of all numbers in the array.
If the operation is not one of the specified ones, the function should return an error message.
Remember to handle the case where the array is empty.
*/

// Function to calculate the sum, average, or product of an array of numbers
/*
Create a function that accepts a string as an argument.
The function should return a new string that is the reverse of the input string.
Remember to handle the case where the string is empty.
*/
// function calculate(n1:string){
//     let result = n1.split('').reverse().join(''); // Split the string into an array of characters, reverse the array, and join the characters back into a string
//     return result;
// }
// const phrase = 'Hello, World!';
// console.log(calculate(phrase)); // Output: '!dlroW ,olleH'

