//type casting
// Define a type `Admin` for an administrative user
type Admin = {
  name: string;
  privileges: string[];
};

// Define a type `Employee` for an employee
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

// Function `add` that adds two `Combinable` values
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString(); // Concatenate if either `a` or `b` is a `string`
  }
  return a + b; // Otherwise, perform numeric addition
}

// Define a type `UnknownEmployee` that can be either `Employee` or `Admin`
type UnknownEmployee = Employee | Admin;

// Function `printEmployeeInformation` that prints information about an `UnknownEmployee`
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name); // Always print `name`

  // Check if `privileges` property exists in `emp` (Type Guard using `in` operator)
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges); // Print `privileges` if exists
  }

  // Check if `startDate` property exists in `emp` (Type Guard using `in` operator)
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate); // Print `startDate` if exists
  }
}

// Example usage of `printEmployeeInformation` function
printEmployeeInformation({ name: 'Manu', startDate: new Date() });

// Define classes `Car` and `Truck` with a `drive` method
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

// Define a type `Vehicle` that can be either `Car` or `Truck`
type Vehicle = Car | Truck;

// Create instances `v1` and `v2` of `Car` and `Truck` respectively
const v1 = new Car();
const v2 = new Truck();

// Function `useVehicle` that uses a `Vehicle`
function useVehicle(vehicle: Vehicle) {
  vehicle.drive(); // Always drive the vehicle

  // Check if `vehicle` is an instance of `Truck` (Type Guard using `instanceof`)
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000); // Load cargo if `vehicle` is a `Truck`
  }
}

// Example usage of `useVehicle` function with instances `v1` and `v2`
useVehicle(v1);
useVehicle(v2);

// Define an interface `Bird` for a bird with a `flyingSpeed`
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

// Define an interface `Horse` for a horse with a `runningSpeed`
interface Horse {
  type: 'horse';
  runningSpeed: number;
}

// Define a type `Animal` that can be either `Bird` or `Horse`
type Animal = Bird | Horse;

// Function `moveAnimal` that moves an `Animal` based on its type
function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
    default:
      speed = 0;
  }
  console.log('Moving at speed: ' + speed);
}

// Example usage of `moveAnimal` function with a `Bird`
moveAnimal({ type: 'bird', flyingSpeed: 10 });

// Type casting with `as` syntax
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!'; // Casting `userInputElement` to `HTMLInputElement`
}
