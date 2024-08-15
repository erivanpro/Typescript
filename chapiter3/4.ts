// Define an abstract class `Department`
abstract class Department {
  static fiscalYear = 2020; // Static property for fiscal year
  protected employees: string[] = []; // Protected property for employees array

  // Constructor to initialize `id` and `name`
  constructor(protected readonly id: string, public name: string) {
    // `id` is readonly and `name` is public
  }

  // Static method to create an employee object
  static createEmployee(name: string) {
    return { name: name };
  }

  // Abstract method to be implemented by derived classes
  abstract describe(this: Department): void;

  // Method to add an employee to the employees array
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  // Method to print employee information
  printEmployeeInformation() {
    console.log('Employees Count:', this.employees.length);
    console.log('Employees:', this.employees);
  }
}

// Define a class `ITDepartment` that extends `Department`
class ITDepartment extends Department {
  admins: string[]; // Property for admins array

  // Constructor to initialize `id`, `admins`, and set `name` as 'IT'
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  // Implementation of the `describe` method required by `Department`
  describe() {
    console.log('IT Department - ID:', this.id);
  }
}

// Define a class `AccountingDepartment` that extends `Department`
class AccountingDepartment extends Department {
  private lastReport: string; // Private property for lastReport
  private static instance: AccountingDepartment; // Private static property for singleton instance

  // Getter for mostRecentReport
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  // Setter for mostRecentReport
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  // Private constructor to initialize `id`, `reports`, and set `name` as 'Accounting'
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  // Static method to get the singleton instance of `AccountingDepartment`
  static getInstance() {
    if (AccountingDepartment.instance) {
      return AccountingDepartment.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  // Implementation of the `describe` method required by `Department`
  describe() {
    console.log('Accounting Department - ID:', this.id);
  }

  // Method to add an employee with a special case for 'Max'
  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  // Method to add a report to the reports array and update lastReport
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  // Method to print all reports
  printReports() {
    console.log('Reports:', this.reports);
  }
}

// Create an employee using the static method `createEmployee`
const employee1 = Department.createEmployee('Max');
console.log('Created Employee:', employee1, 'Fiscal Year:', Department.fiscalYear);

// Create an instance of `ITDepartment`
const it = new ITDepartment('d1', ['Max']);

// Add employees to `it` instance
it.addEmployee('Max');
it.addEmployee('Manu');

// Modify `name` property (public) of `it` instance
// it.name = 'NEW NAME'; // Uncommenting this would throw an error since `name` is readonly in the constructor

// Print employee information of `it` instance
it.printEmployeeInformation();

// Output `it` instance to the console
console.log('IT Department:', it);

// Create a singleton instance of `AccountingDepartment`
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

// Output `accounting` and `accounting2` instances to the console
console.log('Accounting Department (Instance 1):', accounting);
console.log('Accounting Department (Instance 2):', accounting2);

// Set mostRecentReport using setter
accounting.mostRecentReport = 'Year End Report';

// Add reports and employees to `accounting` instance
accounting.addReport('Something went wrong...');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// Output mostRecentReport of `accounting` instance to the console
console.log('Most Recent Report:', accounting.mostRecentReport);

// Describe `accounting` instance using `describe` method
accounting.describe();
