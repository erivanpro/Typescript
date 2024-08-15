// Union type parameters allowing both number and string
function combine(input1: number | string, input2: number | string) {
  let result; // Declare a variable to store the result
  // Check if both inputs are numbers
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2; // If both are numbers, add them
  } else {
    result = input1.toString() + input2.toString(); // Otherwise, concatenate them as strings
  }
  return result; // Return the result
}
// Call the combine function with two numbers and store the result in combinedAges
const combinedAges = combine(30, 26);
console.log(combinedAges); // Log the result, expected output: 56
// Call the combine function with two strings and store the result in combinedNames
const combinedNames = combine('Max', 'Anna');
console.log(combinedNames); // Log the result, expected output: 'MaxAnna'
