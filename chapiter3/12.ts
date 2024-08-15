//Nullish Coalescing
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Define an intersection type `ElevatedEmployee` that combines `Admin` and `Employee`
type ElevatedEmployee = Admin & Employee;

// Create an instance `e1` of type `ElevatedEmployee`
const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
};

// Define a type `Combinable` that can be either `string` or `number`
type Combinable = string | number;

// Define a type `Numeric` that can be either `number` or `boolean`
type Numeric = number | boolean;

// Define an intersection type `Universal` that combines `Combinable` and `Numeric`
type Universal = Combinable & Numeric;

// Function overloads for `add` function
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

// Example usage of `add` function
const result = add('Max', ' Schwarz');
result.split(' ');

// Simulated fetched user data
const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own company' }
};

// Access nested properties with optional chaining and nullish coalescing
console.log(fetchedUserData?.job?.title); // Output: CEO

// Simulate user input being `undefined`
const userInput = undefined;

// Use nullish coalescing operator to provide a default value
const storedData = userInput ?? 'DEFAULT';

console.log(storedData); // Output: DEFAULT
