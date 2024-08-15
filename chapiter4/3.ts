// Adding Multiple Decorators:

// Decorator factory function for logging
function Logger(logString: string) {
  console.log('LOGGER FACTORY');
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// Decorator factory function for adding a template
function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  return function(constructor: any) {
    console.log('Rendering template');
    const hookEl = document.getElementById(hookId); // Get the HTML element with the specified ID
    const p = new constructor(); // Create an instance of the class
    if (hookEl) {
      hookEl.innerHTML = template; // Set the inner HTML of the element to the template string
      hookEl.querySelector('h1')!.textContent = p.name; // Update the h1 element's text content with the instance's name
    }
  };
}

// Applying multiple decorators to the Person class
@Logger('LOGGING') // First decorator (Logger)
@WithTemplate('<h1>My Person Object</h1>', 'app') // Second decorator (WithTemplate)
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
// LOGGER FACTORY
// TEMPLATE FACTORY
// Rendering template
// LOGGING
// [Function: Person]
// Creating person object...
// Person { name: 'Max' }

// Explanation:
// - Multiple decorators are applied to the `Person` class.
// - The `Logger` decorator factory logs "LOGGER FACTORY" when it is evaluated.
// - The `WithTemplate` decorator factory logs "TEMPLATE FACTORY" when it is evaluated.
// - When the `Person` class is defined, the decorators are applied from bottom to top:
//   1. The `WithTemplate` decorator logs "Rendering template", creates an instance of `Person`,
//      and updates the HTML element with ID 'app' to include the template and the name property.
//   2. The `Logger` decorator logs "LOGGING" and the constructor function of `Person`.
// - When `new Person()` is called, the constructor of `Person` logs "Creating person object..." to the console.
// - The instance `pers` of type `Person` is logged to the console, showing that the decorators do not affect the class's functionality but provide additional behavior (logging and DOM manipulation).

// Note:
// - Make sure the HTML element with ID 'app' exists in your document for the `WithTemplate` decorator to work correctly.
// - Decorators and decorator factories are still an experimental feature in TypeScript, so enable them in your TypeScript configuration by setting "experimentalDecorators": true.

// Using multiple decorators allows you to combine various behaviors and apply them to classes,
// enhancing modularity and reusability in your codebase.
