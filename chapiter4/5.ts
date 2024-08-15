// Logger decorator factory function
//Accessor & Parameter Decorators



function Logger(logString: string) {
  console.log('LOGGER FACTORY');
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// WithTemplate decorator factory function
function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  return function(constructor: any) {
    console.log('Rendering template');
    const hookEl = document.getElementById(hookId); // Get the HTML element by ID
    const p = new constructor(); // Create an instance of the class
    if (hookEl) {
      hookEl.innerHTML = template; // Set the inner HTML of the element to the template string
      hookEl.querySelector('h1')!.textContent = p.name; // Set the text content of the h1 element to the name property
    }
  };
}

// Applying multiple decorators to the Person class
@Logger('LOGGING') // Logger decorator
@WithTemplate('<h1>My Person Object</h1>', 'app') // WithTemplate decorator
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person(); // Creating an instance of Person

console.log(pers); // Logging the created Person instance

// ---

// Property decorator function
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

// Accessor decorator function
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Method decorator function
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Parameter decorator function
function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

// Product class with various decorators applied
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

const p1 = new Product('Book', 19); // Creating an instance of Product
const p2 = new Product('Book 2', 29); // Creating another instance of Product

// Output in Console:
// LOGGER FACTORY
// TEMPLATE FACTORY
// Rendering template
// LOGGING
// [Function: Person]
// Creating person object...
// Person { name: 'Max' }
// Property decorator!
// { constructor: [Function: Product], getPriceWithTax: [Function] } title
// Accessor decorator!
// { constructor: [Function: Product], getPriceWithTax: [Function] }
// price
// { get: [Function (anonymous)], set: [Function (anonymous)], enumerable: true, configurable: true }
// Method decorator!
// { constructor: [Function: Product], getPriceWithTax: [Function] }
// getPriceWithTax
// { value: [Function (anonymous)], writable: true, enumerable: true, configurable: true }
// Parameter decorator!
// { constructor: [Function: Product], getPriceWithTax: [Function] }
// getPriceWithTax
// 0

// Explanation:
// - `Logger` and `WithTemplate` are decorator factories applied to the `Person` class.
// - `Log`, `Log2`, `Log3`, and `Log4` are decorators for properties, accessors, methods, and parameters respectively in the `Product` class.
// - These decorators provide metadata and additional behavior to the class elements they are applied to.
