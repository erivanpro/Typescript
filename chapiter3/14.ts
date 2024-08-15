// Generics with Constraints:
// Generics can also have constraints, which specify that a type parameter must extend a certain type.
// This ensures that the properties and methods of that type are available within the generic function or class.


// Example: Merge function with constraints
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}


const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
// Output: { name: 'Max', hobbies: ['Sports'], age: 30 }

// Explanation:
// - `T extends object` and `U extends object`: These are constraints on the generic types T and U.
//   They indicate that T and U must be objects (or types that inherit from object).
//   This ensures that `objA` and `objB` have properties that can be merged using `Object.assign`.

// In this example:
// - `objA` is expected to have properties of type T.
// - `objB` is expected to have properties of type U.
// - The `merge` function combines these two objects into a single object using `Object.assign`.

// Note:
// - If you try to pass non-object types to `merge`, TypeScript will give you an error.
// - TypeScript infers the types of `mergedObj` as { name: string; hobbies: string[]; } & { age: number; }.
//   This intersection type represents an object with all properties from both input objects.

// If you uncomment the following lines, TypeScript will show errors:
// mergedObj.hobbies.push('Good Food'); // TypeScript error: Property 'push' does not exist on type 'string[]'.
// console.log(mergedObj.age.toFixed(2)); // TypeScript error: Property 'toFixed' does not exist on type 'number'.

// Using generics with constraints provides type safety and allows TypeScript to perform static type checking,
// ensuring that your code is more robust and less error-prone.
