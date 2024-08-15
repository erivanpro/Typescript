// Generics with Constraints in another function:

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

// Interface for generic function with constraints
interface Lengthy {
  length: number;
}

// Example: Generic function with constraint
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));
// Output: [['Sports', 'Cooking'], 'Got 2 elements.']

// Explanation:
// - `T extends Lengthy`: This constraint ensures that the type `T` must have a `length` property of type `number`.
//   This allows the function to correctly count and describe the number of elements in `element`.

// Note:
// - TypeScript infers the type of `element` in `countAndDescribe` as `string[]` based on the argument passed.
// - The function returns a tuple where the first element is of type `T` and the second element is a `string`.

// Function using keyof with generics
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'Max' }, 'name'));
// Output: 'Value: Max'

// Explanation:
// - `T extends object` and `U extends keyof T`: These are constraints on the generic types T and U.
//   - `T extends object`: Indicates that `T` must be an object or a type that extends object.
//   - `U extends keyof T`: Indicates that `U` must be a key of type `T`.
// - The function `extractAndConvert` takes an object `obj` of type `T` and a key `key` of type `U`.
// - It returns the value of `obj[key]`, ensuring type safety because `key` must be a valid key of `obj`.

// Note:
// - TypeScript infers the type of `obj` in `extractAndConvert` as `{ name: string }` based on the argument passed.
// - The function returns a string that concatenates 'Value: ' with the value of `obj[key]`.

// If you uncomment the following lines, TypeScript will show errors:
// console.log(extractAndConvert({ name: 'Max' }, 'age')); // TypeScript error: Argument of type '"age"' is not assignable to parameter of type '"name"'.
// console.log(extractAndConvert({ name: 'Max' }, 'hobbies')); // TypeScript error: Argument of type '"hobbies"' is not assignable to parameter of type '"name"'.

// Using generics with constraints allows you to create more flexible and type-safe functions or classes,
// ensuring that your code is more reliable and less error-prone.
