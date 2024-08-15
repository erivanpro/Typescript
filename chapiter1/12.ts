// any is not a good idea becuase you cannot check the data 
let variable: any;
variable = 'Hello, world!'; // Assigning a string
console.log(variable);      // Output: Hello, world!
variable = 42;              // Assigning a number
console.log(variable);      // Output: 42
variable = { key: 'value' };// Assigning an object
console.log(variable);      // Output: { key: 'value' }
variable = [1, 2, 3];       // Assigning an array
console.log(variable);      // Output: [1, 2, 3]
