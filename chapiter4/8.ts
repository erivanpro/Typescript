// Logger decorator factory function
function Logger(logString: string) {
  console.log('LOGGER FACTORY');
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// WithTemplate decorator factory function that returns a class extending the original constructor
function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  return function<T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
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

// Autobind decorator function
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor;
}

// Printer class with Autobind decorator applied to a method
class Printer {
  message = 'This works!';

  @Autobind // Applying the Autobind decorator
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();
p.showMessage(); // Logs: 'This works!'

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage); // Ensures 'this' is correctly bound

// ---

// Validator configuration interface
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

// Registered validators storage
const registeredValidators: ValidatorConfig = {};

// Required validator decorator function
function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required']
  };
}

// PositiveNumber validator decorator function
function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive']
  };
}

// Validation function to check if an object is valid based on its decorators
function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

// Course class with validation decorators applied
class Course {
  @Required // Applying the Required validator
  title: string;
  @PositiveNumber // Applying the PositiveNumber validator
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

// Form handling and validation
const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
  }
  console.log(createdCourse); // Logging the created and validated Course instance
});

// Explanation:
// - `Logger` and `WithTemplate` are decorator factories applied to the `Person` class.
// - `Log`, `Log2`, `Log3`, and `Log4` are decorators for properties, accessors, methods, and parameters respectively in the `Product` class.
// - `Autobind` is a method decorator that ensures the method is always called with the correct `this` context.
// - The `Printer` class uses the `Autobind` decorator to correctly bind the `showMessage` method when used as an event handler.
// - `Required` and `PositiveNumber` are validation decorators used in the `Course` class.
// - `validate` function checks if an object is valid based on the registered validators.
