// Building More Useful Decorators:

// Decorator factory function for logging
function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}





// Decorator factory function for adding a template
function WithTemplate(template: string, hookId: string) {
  return function(constructor: any) {
    const hookEl = document.getElementById(hookId); // Get the HTML element with the specified ID
    const p = new constructor(); // Create an instance of the class
    if (hookEl) {
      hookEl.innerHTML = template; // Set the inner HTML of the element to the template string
      hookEl.querySelector('h1')!.textContent = p.name; // Update the h1 element's text content with the instance's name
    }
  };
}

// Applying the WithTemplate decorator factory to the Person class
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name = 'Max';
  constructor() {
    console.log('Creating person object...');
  }
}

// Creating an instance of the Person class
const pers = new Person();

console.log(pers);

// Output in Console:
// Creating person object...
// Person { name: 'Max' }

// Explanation:
// - The `Logger` decorator factory logs a message and the constructor function when applied to a class.
//   However, it is commented out in this example.
// - The `WithTemplate` decorator factory takes a template string and an HTML element ID (hookId).
// - The returned decorator function:
//   1. Gets the HTML element with the specified ID (hookEl).
//   2. Creates an instance of the class (p).
//   3. Sets the inner HTML of the hookEl to the provided template.
//   4. Updates the text content of the h1 element within hookEl to the name property of the class instance (p).
// - The `WithTemplate('<h1>My Person Object</h1>', 'app')` decorator factory is applied to the `Person` class.
// - When the `Person` class is instantiated, the decorator function updates the HTML element with ID 'app'.
// - The constructor of `Person` logs "Creating person object..." to the console.
// - The instance `pers` of type `Person` is logged to the console, showing that the decorator does not affect the class's functionality but enhances the DOM.

// Note:
// - Make sure the HTML element with ID 'app' exists in your document for the `WithTemplate` decorator to work correctly.
// - Decorators and decorator factories are still an experimental feature in TypeScript, so enable them in your TypeScript configuration by setting "experimentalDecorators": true.

// Using decorator factories like `WithTemplate` allows you to add more useful behavior to your classes,
// such as dynamically updating the DOM, making your code more interactive and dynamic.
