// optional parameters
// Define a type for a function that adds two numbers
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number; // Interface defining a function signature
}
// Declare a variable `add` of type `AddFn`
let add: AddFn;

// Assign a function to `add` variable that adds two numbers
add = (n1: number, n2: number) => {
  return n1 + n2;
};
// Define an interface `Named` with optional properties
interface Named {
  readonly name?: string; // Optional readonly `name` property
  outputName?: string; // Optional `outputName` property
}
// Define an interface `Greetable` that extends `Named`
interface Greetable extends Named {
  greet(phrase: string): void; // Method `greet` that takes a `phrase` argument and returns `void`
}
// Implement the `Greetable` interface in a `Person` class
class Person implements Greetable {
  name?: string; // Optional `name` property of type `string`
  age = 30; // Default `age` property with value `30`

  // Constructor that optionally initializes `name` property
  constructor(n?: string) {
    if (n) {
      this.name = n; // Set `name` property if `n` is provided
    }
  }
  // Implement the `greet` method required by `Greetable` interface
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name); // Log greeting with `name` if available
    } else {
      console.log('Hi!'); // Log default greeting if `name` is not available
    }
  }
}
// Declare a variable `user1` of type `Greetable`
let user1: Greetable;
// Assign a new `Person` object to `user1`, optionally providing `name`
user1 = new Person();
// user1.name = 'Manu'; // Uncommenting this would set `name`, but it's optional
// Call the `greet` method on `user1` with a specific phrase
user1.greet('Hi there - I am');
// Output the `user1` object to the console
console.log(user1);
