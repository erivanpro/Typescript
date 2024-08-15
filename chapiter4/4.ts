// Diving into Property Decorators

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

// Output in Console:
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

// ---

// Property decorator
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

// Accessor decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Method decorator
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Parameter decorator
function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

// Class with various decorators applied
class Product {
  @Log // Applying the property decorator
  title: string;
  private _price: number;

  @Log2 // Applying the accessor decorator
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3 // Applying the method decorator
  getPriceWithTax(@Log4 tax: number) { // Applying the parameter decorator
    return this._price * (1 + tax);
  }
}

// Output in Console:
// Property decorator!
// [Object: Product] title
// Accessor decorator!
// [Object: Product]
// price
// { get: [Function (anonymous)], set: [Function (anonymous)], enumerable: true, configurable: true }
// Method decorator!
// [Object: Product]
// getPriceWithTax
// { value: [Function (anonymous)], writable: true, enumerable: true, configurable: true }
// Parameter decorator!
// [Object: Product]
// getPriceWithTax
// 0

// Explanation:
// - `Log` is a property decorator that logs the target and property name.
// - `Log2` is an accessor decorator that logs the target, property name, and property descriptor.
// - `Log3` is a method decorator that logs the target, method name, and property descriptor.
// - `Log4` is a parameter decorator that logs the target, method name, and parameter position.
// - These decorators provide metadata about class properties, methods, and parameters, useful for debugging and runtime introspection.

// Note:
// - Decorators and decorator factories are still an experimental feature in TypeScript, so enable them in your TypeScript configuration by setting "experimentalDecorators": true.

// Using different types of decorators allows you to add metadata and behavior to class properties,
// methods, and parameters, enhancing the flexibility and introspection capabilities of your codebase.
