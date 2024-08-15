// Decorators with comments:
// Check TypeScript compiler options to ensure experimental decorators are enabled:
// "experimentalDecorators": true

// Decorator function
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

// Applying the Logger decorator to the Person class
@Logger
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

// Creating an instance of the Person class
const pers = new Person();

console.log(pers);

// Output:
// Logging...
// [Function: Person]
// Creating person object...
// Person { name: 'Max' }

// Explanation:
// - Decorators in TypeScript are a way to annotate and modify classes and their members at design time.
// - The `Logger` decorator is applied to the `Person` class using the `@` syntax.
// - When the `Person` class is defined, the `Logger` decorator function is called with the constructor of `Person`.
// - Inside the `Logger` decorator, we log a message and the constructor function itself.
// - When `new Person()` is called, the constructor of `Person` is executed, and the log message "Creating person object..." is printed.
// - The instance `pers` of type `Person` is then logged to the console, showing that the decorator does not affect the class's functionality but provides additional logging.

// Note:
// - Decorators are still an experimental feature in TypeScript, so make sure to enable them in your TypeScript configuration by setting "experimentalDecorators": true.

// Using decorators allows you to add metadata and behavior to classes and their members,
// enhancing modularity, reusability, and maintainability of your codebase.
