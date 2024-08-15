// Extending interfaces 

// Define an interface for objects with a readonly `name` property
interface Named {
  readonly name: string; // `readonly` ensures that `name` cannot be changed after initialization
}

// Define an interface that extends `Named`, adding a `greet` method
interface Greetable extends Named {
  greet(phrase: string): void; // `greet` method takes a `phrase` argument of type `string` and returns `void`
}

// Implement the `Greetable` interface in a `Person` class
class Person implements Greetable {
  name: string; // `name` property of type `string`
  age = 30; // `age` property with a default value of `30`

  // Constructor to initialize `name` property
  constructor(n: string) {
    this.name = n; // Initialize `name` property with parameter `n`
  }

  // Implement the `greet` method required by the `Greetable` interface
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name); // Log the greeting phrase followed by the `name`
  }
}

// Declare a variable `user1` of type `Greetable`
let user1: Greetable;

// Assign a new `Person` object to `user1`, passing `'Max'` to the constructor
user1 = new Person('Max');

// This line would cause an error because `name` is `readonly` in the `Named` interface
// user1.name = 'Manu';

// Call the `greet` method on `user1` with a specific phrase
user1.greet('Hi there - I am');

// Output the `user1` object to the console
console.log(user1);
