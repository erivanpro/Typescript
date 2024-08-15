// Define a function named 'add' that takes two parameters: 'n1' and 'n2' both of type number.
function add(n1: number, n2: number): number {
    // Return the sum of 'n1' and 'n2'.
    return n1 + n2;
}

// Define a function named 'printResult' that takes one parameter: 'num' of type number.
// The function does not return any value, so its return type is specified as 'void'.
function printResult(num: number): void {
    // Log a string to the console that includes 'num'.
    console.log('Result: ' + num);
    // Return statement without any value. This is optional and does not affect the function's behavior.
    return;
}

// Call the 'add' function with arguments 5 and 12, and pass the result to the 'printResult' function.
printResult(add(5, 12));


// Define a function named 'getMessage' that takes one parameter: 'name' of type string.
// The function returns a string, so its return type is specified as 'string'.
function getMessage(name: string): string {
    // Create a message by concatenating the string 'Hello, ' with the 'name' parameter.
    return 'Hello, ' + name + '!';
}

// Call the 'getMessage' function with the argument "Alice".
// The function returns the string "Hello, Alice!" which is assigned to the variable 'message'.
const message = getMessage("Alice");

// Log the returned message to the console.
console.log(message); // Logs "Hello, Alice!" to the console



// Define a function named 'logMessage' that takes one parameter: 'message' of type string.
// The function does not return any value, so its return type is specified as 'void'.
function logMessage(message: string): void {
    // Log the 'message' to the console.
    console.log(message);
    // No return value is needed. The function implicitly returns undefined.
}
// Call the 'logMessage' function with the argument "Hello, World!".
// This logs "Hello, World!" to the console.
logMessage("Hello, World!");


