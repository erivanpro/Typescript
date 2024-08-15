// Define a type `Admin` for an administrative user
//more type Guards



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
