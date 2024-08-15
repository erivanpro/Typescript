// Generics:
// Generics allow you to write flexible, reusable code that works with different types.
// You can define functions, classes, or interfaces with placeholders for types.
// Example 1: Array of strings or numbers
const names: Array<string | number> = [];
// This array can hold strings or numbers.
// Array<string | number> is a generic type. It's a built-in TypeScript type that allows multiple types.
// Example 2: Promise with a specific return type
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done');
    }, 2000);
});
// Here, Promise<string> specifies that this Promise will eventually resolve with a string.
// Promise<string> is a generic type. It's a type of Promise that holds a string when resolved.
// Note: Your original code had a small typo, corrected here:
// const promise = Promise<string> = new Promise((resolve, reject) => {
// should be:
// const promise: Promise<string> = new Promise((resolve, reject) => {
// Explanation of generics:
// - Generics in TypeScript allow you to create components that can work over a variety of types rather than a single one.
// - In the Array example, Array<string | number> means the array can contain either strings or numbers.
// - In the Promise example, Promise<string> means the promise will resolve with a string.
// If you uncomment the following line, TypeScript will give you an error:
// names[0].split(' ');
// This is because TypeScript knows that `names` can contain numbers, and numbers do not have a `split` method.
// If you try to resolve the promise with a different type, TypeScript will also give you an error.
// For example:
// promise.then(result => {
//     console.log(result.split(' '));
// });
// TypeScript will show an error because `result` is inferred as `string`, and TypeScript does not know if `result` has a `split` method.
// Using generics ensures type safety and allows TypeScript to perform static type checking.
