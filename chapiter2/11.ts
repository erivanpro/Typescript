// Constructor functions 
// A class in programming is a blueprint or template for creating objects that define 
// their properties (attributes) and behaviors (methods). 
// It serves as a blueprint that defines the data and behavior of a type of object.

class Department {
  name: string;
  // Constructor function to initialize the name property
  constructor(n: string) {
    this.name = n; // Assign the passed argument to the name property of the object
  }
  // Method to describe the department, ensuring 'this' refers to an instance of Department
  describe(this: Department) {
    console.log('Department: ' + this.name); // Print the name of the department
  }
}
// Create an instance of the Department class with the name 'Accounting'
const accounting = new Department('Accounting');
// Call the describe method on the accounting object
accounting.describe(); // Output: Department: Accounting
// Create a new object with a name property and copy the describe method from accounting
const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// Call the describe method on the accountingCopy object
accountingCopy.describe(); // Output: Department: DUMMY
