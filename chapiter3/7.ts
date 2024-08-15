// Intersection Types
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
