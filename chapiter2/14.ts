// Readonly properties

class Department {
  // employees is a private property, only accessible within the class
  private employees: string[] = [];

  // Constructor function using shorthand initialization with readonly for id and public for name
  constructor(private readonly id: string, public name: string) {
    // Using shorthand initialization, no need to explicitly define and assign id and name
  }

  // Method to describe the department, ensuring 'this' refers to a Department instance
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`); // Logs the id and name of the department
  }

  // Method to add an employee to the employees array
  addEmployee(employee: string) {
    // Validation etc. could be added here
    // this.id = 'd2'; // This line would cause an error because id is readonly
    this.employees.push(employee); // Adds the new employee to the employees array
  }

  // Method to print the number of employees and their names
  printEmployeeInformation() {
    console.log(this.employees.length); // Logs the number of employees
    console.log(this.employees); // Logs the names of the employees
  }
}

// Creating a new instance of the Department class with id 'd1' and name 'Accounting'
const accounting = new Department('d1', 'Accounting');

// Adding employees to the accounting department
accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// This line would cause an error because employees is private
// accounting.employees[2] = 'Anna';

// Calling the describe method on the accounting instance
accounting.describe(); // Outputs: Department (d1): Accounting

// Changing the name of the accounting department
accounting.name = 'NEW NAME';

// Calling the printEmployeeInformation method to print the employees
accounting.printEmployeeInformation(); 
// Outputs: 
// 2
// ['Max', 'Manu']

// This part is commented out as it would cause a type error
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
