// Declare a variable 'userInput' with the type 'unknown'.
let userInput: unknown;

// Declare a variable 'userName' with the type 'string'.
let userName: string;

// Assign the number 5 to 'userInput'.
userInput = 5;

// Reassign the string 'Max' to 'userInput'.
userInput = 'Max';

// Check if 'userInput' is of type 'string' using a type guard.
// Since TypeScript checks are case-sensitive, it should be 'string' instead of 'String'
if (typeof userInput === 'string') {
    // Assign 'userInput' to 'userName' only if 'userInput' is indeed a string.
    userName = userInput;
}
