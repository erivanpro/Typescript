// Singletons & Private Constructors Example

// Abstract class Department
abstract class Department {
  static fiscalYear = 2020; // Static property fiscalYear
  protected employees: string[] = []; // Protected property employees

  // Constructor function with readonly id and public name
  constructor(protected readonly id: string, public name: string) {
    // No need to explicitly initialize id and name
    // console.log(Department.fiscalYear); // Accessing static property
  }

  // Static method to create an employee
  static createEmployee(name: string) {
    return { name: name }; // Returns an object with the employee's name
  }

  // Abstract method describe, to be implemented in derived classes
  abstract describe(this: Department): void;

  // Method to add an employee
  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2'; // This line would cause an error because id is readonly
    this.employees.push(employee); // Adds the employee to the employees array
  }

  // Method to print employee information
  printEmployeeInformation() {
    console.log(this.employees.length); // Logs the number of employees
    console.log(this.employees); // Logs the names of the employees
  }
}

// ITDepartment class inherits from Department
class ITDepartment extends Department {
  admins: string[]; // Property to hold the admins

  // Constructor function to initialize the ITDepartment object
  constructor(id: string, admins: string[]) {
    super(id, 'IT'); // Calls the constructor of the parent class, Department
    this.admins = admins; // Sets the admins property to the provided argument
  }

  // Implementation of the describe method for ITDepartment
  describe() {
    console.log('IT Department - ID: ' + this.id); // Logs the IT department description
  }
}

// AccountingDepartment class inherits from Department
class AccountingDepartment extends Department {
  private lastReport: string; // Private property to hold the last report
  private static instance: AccountingDepartment; // Static instance property for singleton

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
      throw new Error('Please pass in a valid value!'); // Throws an error if the value is empty
    }
    this.addReport(value); // Adds the report using the addReport method
  }

  // Private constructor to enforce singleton pattern
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting'); // Calls the constructor of the parent class, Department
    this.lastReport = reports[0]; // Sets the lastReport to the first report in the reports array
  }

  // Static method to get the singleton instance
  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance; // Returns the existing instance if available
    }
    this.instance = new AccountingDepartment('d2', []); // Creates a new instance if not available
    return this.instance; // Returns the singleton instance
  }

  // Implementation of the describe method for AccountingDepartment
  describe() {
    console.log('Accounting Department - ID: ' + this.id); // Logs the Accounting department description
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

// Creating an employee using the static method of the Department class
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear); // Logs the employee and the fiscal year

// Creating a new instance of the ITDepartment class with id 'd1' and admins ['Max']
const it = new ITDepartment('d1', ['Max']);

// Adding employees to the IT department
it.addEmployee('Max');
it.addEmployee('Manu');

// This line would cause an error because employees is protected
// it.employees[2] = 'Anna';

// Calling the describe method on the it instance
it.describe(); // Outputs: IT Department - ID: d1

// Changing the name of the IT department
it.name = 'NEW NAME';

// Calling the printEmployeeInformation method to print the employees
it.printEmployeeInformation(); 
// Outputs: 
// 2
// ['Max', 'Manu']

// Logging the it instance to the console
console.log(it);

// Getting the singleton instance of the AccountingDepartment class
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2); // Logs the same instance twice

// Using the setter to set the most recent report
accounting.mostRecentReport = 'Year End Report'; // Adds 'Year End Report' to the reports array

// Adding another report to the accounting department
accounting.addReport('Something went wrong...');

// Using the getter to get the most recent report
console.log(accounting.mostRecentReport); // Outputs: Something went wrong...

// Adding employees to the accounting department
accounting.addEmployee('Max'); // This will not add 'Max' because of the overridden method
accounting.addEmployee('Manu');

// Calling the describe method on the accounting instance
accounting.describe(); // Outputs: Accounting Department - ID: d2

// Uncommenting the lines below will print the reports and employee information
// accounting.printReports();
// accounting.printEmployeeInformation();

// This part is commented out as it would cause a type error
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
