// Private and public access modifiers

class Department {
  public name: string; // Public property, accessible from outside the class
  private employees: string[] = []; // Private property, only accessible within the class

  // Constructor function to initialize the Department object
  constructor(n: string) {
    this.name = n; // Sets the name property to the provided argument
  }

  // Method to describe the department, ensuring 'this' refers to a Department instance
  describe(this: Department) {
    console.log('Department: ' + this.name); // Logs the name of the department to the console
  }

  // Method to add an employee to the employees array
  addEmployee(employee: string) {
    // Validation etc. could be added here
    this.employees.push(employee); // Adds the new employee to the employees array
  }

  // Method to print the number of employees and their names
  printEmployeeInformation() {
    console.log(this.employees.length); // Logs the number of employees
    console.log(this.employees); // Logs the names of the employees
  }
}

// Creating a new instance of the Department class with the name 'Accounting'
const accounting = new Department('Accounting');

// Adding employees to the accounting department
accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// This line would cause an error because employees is private
// accounting.employees[2] = 'Anna';

// Calling the describe method on the accounting instance
accounting.describe(); // Outputs: Department: Accounting

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
