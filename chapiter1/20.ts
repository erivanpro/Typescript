// Define a variable with type `unknown`
let userInput: unknown;
// Define a variable with type `string`
let userName: string;

// Assign different types to `userInput`
userInput = 5;
userInput = 'Max';

// Check if `userInput` is of type `string`
if (typeof userInput === 'string') {
  // Since `userInput` is of type `string`, assign it to `userName`
  userName = userInput; // Valid assignment
}

// Define a function that returns `never` (it never returns a value)
function generateError(message: string, code: number): never {
  // Throw an object with the error message and code
  throw { message: message, errorCode: code };
  // Uncommenting the following line would make the function's type `never`
  // while (true) {}
}

// Call `generateError` function
generateError('An error occurred!', 500);
