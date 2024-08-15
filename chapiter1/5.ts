/*
  TypeScript vs JavaScript Types
*/
/* In JavaScript, sometimes we need to manually check the types of variables to ensure they are correct.
function add(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input');
    }
    return n1 + n2;
}
const number1 = '5';
const number2 = 2.8;
try {
    const result = add(number1, number2);
    console.log(result);
} catch (error) {
    console.error(error.message);
}

*/
// In TypeScript, we can define the types of the function parameters and get type checking at compile time.
function adds(n1: number, n2: number): number {
    return n1 + n2;
}
const num1: number = 5;
const num2: number = 2.8;
const results: number = adds(num1, num2);
console.log(results);

