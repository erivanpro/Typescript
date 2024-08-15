// Working with Decorator Factories:
// Decorator factory function
function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}
// Applying the Logger decorator factory to the Person class
@Logger('LOGGING - PERSON')
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
// LOGGING - PERSON
// [Function: Person]
// Creating person object...
// Person { name: 'Max' }

// Explanation:
// - A decorator factory is a function that returns a decorator function.
// - The `Logger` decorator factory takes a `logString` parameter and returns a decorator function.
// - The returned decorator function logs the `logString` and the constructor of the class it is applied to.
// - The `Logger('LOGGING - PERSON')` decorator factory is applied to the `Person` class using the `@` syntax.
// - When the `Person` class is defined, the `Logger` decorator factory is executed, which in turn calls the decorator function with the constructor of `Person`.
// - Inside the decorator function, the log string "LOGGING - PERSON" and the constructor function itself are logged.
// - When `new Person()` is called, the constructor of `Person` is executed, and the log message "Creating person object..." is printed.
// - The instance `pers` of type `Person` is then logged to the console, showing that the decorator does not affect the class's functionality but provides additional logging.

// Note:
// - Decorators and decorator factories are still an experimental feature in TypeScript, so make sure to enable them in your TypeScript configuration by setting "experimentalDecorators": true.

// Using decorator factories allows you to customize decorators by passing parameters,
// making them more flexible and reusable in your codebase.
