// Type Aliases / custom types 

// Define a type alias 'Combinable' that can be either a number or a string
type Combinable = number | string;

// Define a type alias 'ConversionDescriptor' that can only be 'as-number' or 'as-text'
type ConversionDescriptor = 'as-number' | 'as-text';

// Define a function named 'combine' with three parameters
// 'input1' and 'input2' are of type 'Combinable'
// 'resultConversion' is of type 'ConversionDescriptor'
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  // Declare a variable to hold the result of the operation
  let result;

  // Check if both 'input1' and 'input2' are numbers or if 'resultConversion' is 'as-number'
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    // Convert 'input1' and 'input2' to numbers and add them together
    result = +input1 + +input2;
  } else {
    // Otherwise, convert 'input1' and 'input2' to strings and concatenate them
    result = input1.toString() + input2.toString();
  }

  // Return the resulting value
  return result;

  // The following code is commented out and will not be executed
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

// Call the 'combine' function with two numbers and 'as-number', store the result in 'combinedAges'
const combinedAges = combine(30, 26, 'as-number');
// Log the result to the console, expected output: 56
console.log(combinedAges);

// Call the 'combine' function with two strings and 'as-number', store the result in 'combinedStringAges'
const combinedStringAges = combine('30', '26', 'as-number');
// Log the result to the console, expected output: 56
console.log(combinedStringAges);

// Call the 'combine' function with two strings and 'as-text', store the result in 'combinedNames'
const combinedNames = combine('Max', 'Anna', 'as-text');
// Log the result to the console, expected output: MaxAnna
console.log(combinedNames);
