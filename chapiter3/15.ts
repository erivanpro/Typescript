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

// If you uncomment the following line, TypeScript will show an error:
// console.log(countAndDescribe(10)); // TypeScript error: Argument of type '10' is not assignable to parameter of type 'Lengthy'.

// Using generics with constraints allows you to create more flexible and type-safe functions or classes,
// ensuring that your code is more reliable and less error-prone.
