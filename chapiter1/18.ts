// Define a function named 'add' that takes two parameters: 'n1' and 'n2', both of type number.
// The function returns the sum of 'n1' and 'n2'.
function add(n1: number, n2: number) {
  return n1 + n2;
}

// Define a function named 'printResult' that takes one parameter: 'num' of type number.
// The function logs a message to the console including the 'num' parameter.
// The function does not return any value, so its return type is specified as 'void'.
function printResult(num: number): void {
  console.log('Result: ' + num);
}

// Define a function named 'addAndHandle' that takes three parameters:
// 'n1' and 'n2' of type number, and 'cb' which is a callback function that takes one parameter of type number and returns void.
// The function calculates the sum of 'n1' and 'n2', and then calls the callback 'cb' with the result.
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// Call the 'add' function with arguments 5 and 12, and pass the result to the 'printResult' function.
printResult(add(5, 12));

// Declare a variable 'combineValues' and specify its type as a function that takes two numbers and returns a number.
let combineValues: (a: number, b: number) => number;

// Assign the 'add' function to 'combineValues'.
combineValues = add;

// Uncommenting the lines below would cause TypeScript to throw an error:
// combineValues = printResult; // Error: Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.
// combineValues = 5; // Error: Type 'number' is not assignable to type '(a: number, b: number) => number'.

// Call 'combineValues' (which now holds the 'add' function) with arguments 8 and 8, and log the result to the console.
console.log(combineValues(8, 8));

// Call 'addAndHandle' with arguments 10, 20, and a callback function that logs the result to the console.
addAndHandle(10, 20, (result) => {
  console.log(result);
});
