// Generics, Interfaces, Classes, and Readonly with comments:

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

// Function using keyof with generics
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');
// Output: 'Value: Max'

// Explanation:
// - `T extends object` and `U extends keyof T`: These are constraints on the generic types T and U.
//   - `T extends object`: Indicates that `T` must be an object or a type that extends object.
//   - `U extends keyof T`: Indicates that `U` must be a key of type `T`.
// - The function `extractAndConvert` takes an object `obj` of type `T` and a key `key` of type `U`.
// - It returns the value of `obj[key]`, ensuring type safety because `key` must be a valid key of `obj`.

// Class with generics
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
// Output: ['Manu']

const numberStorage = new DataStorage<number>();

// Note:
// - `DataStorage<T extends string | number | boolean>`: This class uses generics to restrict the types that can be stored.
// - `addItem`, `removeItem`, and `getItems` methods operate on an array `data` of type `T[]`.
// - `textStorage` is an instance of `DataStorage<string>`, so it can only store strings.
// - `numberStorage` is an instance of `DataStorage<number>`, so it can only store numbers.
// - TypeScript ensures type safety within the `DataStorage` class, preventing operations on incorrect types.

// Interface example
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// Function to create a CourseGoal
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// Readonly example
const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu'); // Error: Property 'push' does not exist on type 'readonly string[]'.
// names.pop(); // Error: Property 'pop' does not exist on type 'readonly string[]'.

// Explanation:
// - `Readonly<string[]>`: This type annotation makes the `names` array immutable.
// - Attempts to modify the array (e.g., `push`, `pop`) will result in TypeScript errors, ensuring immutability.

// If you uncomment the following lines, TypeScript will show errors:
// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// objStorage.addItem(maxObj); // TypeScript error: Argument of type '{ name: string; }' is not assignable to parameter of type 'object'.
// objStorage.addItem({name: 'Manu'}); // TypeScript error: Argument of type '{ name: string; }' is not assignable to parameter of type 'object'.
// objStorage.removeItem(maxObj); // TypeScript error: Argument of type '{ name: string; }' is not assignable to parameter of type 'object'.

// Using generics, interfaces, classes, and readonly in TypeScript allows you to create more flexible,
// type-safe, and immutable data structures and functions, ensuring that your code is more reliable
// and less error-prone.
