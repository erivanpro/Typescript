// Getters and Setters Example

class Department {
  // employees is a protected property, accessible within the class and its subclasses
  protected employees: string[] = [];

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

// ITDepartment class inherits from Department
class ITDepartment extends Department {
  admins: string[]; // Public property to hold the admins

  // Constructor function to initialize the ITDepartment object
  constructor(id: string, admins: string[]) {
    super(id, 'IT'); // Calls the constructor of the parent class, Department
    this.admins = admins; // Sets the admins property to the provided argument
  }
}

// AccountingDepartment class inherits from Department
class AccountingDepartment extends Department {
  private lastReport: string; // Private property to hold the last report

  // Getter for the most recent report
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport; // Returns the last report if it exists
    }
    throw new Error('No report found.'); // Throws an error if no report is found
  }

  // Setter for the most recent report
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!'); // Throws an error if the value is invalid
    }
    this.addReport(value); // Adds the new report using the addReport method
  }

  // Constructor function to initialize the AccountingDepartment object
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting'); // Calls the constructor of the parent class, Department
    this.lastReport = reports[0]; // Sets the lastReport to the first report in the reports array
  }

  // Override the addEmployee method to include additional validation
  addEmployee(name: string) {
    if (name === 'Max') {
      return; // If the employee's name is 'Max', do not add them to the employees array
    }
    this.employees.push(name); // Adds the employee to the employees array if the name is not 'Max'
  }

  // Method to add a report to the reports array
  addReport(text: string) {
    this.reports.push(text); // Adds the new report to the reports array
    this.lastReport = text; // Sets the lastReport to the new report
  }

  // Method to print the reports
  printReports() {
    console.log(this.reports); // Logs the reports to the console
  }
}

// Creating a new instance of the ITDepartment class with id 'd1' and admins ['Max']
const it = new ITDepartment('d1', ['Max']);

// Adding employees to the IT department
it.addEmployee('Max');
it.addEmployee('Manu');

// This line would cause an error because employees is protected
// it.employees[2] = 'Anna';

// Calling the describe method on the it instance
it.describe(); // Outputs: Department (d1): IT

// Changing the name of the IT department
it.name = 'NEW NAME';

// Calling the printEmployeeInformation method to print the employees
it.printEmployeeInformation(); 
// Outputs: 
// 2
// ['Max', 'Manu']

// Logging the it instance to the console
console.log(it);

// Creating a new instance of the AccountingDepartment class with id 'd2' and an empty reports array
const accounting = new AccountingDepartment('d2', []);

// Using the setter to set the most recent report
accounting.mostRecentReport = 'Year End Report'; // Adds 'Year End Report' to the reports array

// Adding another report to the accounting department
accounting.addReport('Something went wrong...');

// Using the getter to get the most recent report
console.log(accounting.mostRecentReport); // Outputs: Something went wrong...

// Adding employees to the accounting department
accounting.addEmployee('Max'); // This will not add 'Max' because of the overridden method
accounting.addEmployee('Manu');

// Calling the printReports method to print the reports
accounting.printReports(); 
// Outputs: 
// ['Year End Report', 'Something went wrong...']

// Calling the printEmployeeInformation method to print the employees
accounting.printEmployeeInformation(); 
// Outputs: 
// 1
// ['Manu']

// This part is commented out as it would cause a type error
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
