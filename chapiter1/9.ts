// Define a TypeScript object type for Person
type Person = {
  name: string;
  age: number;
  hobbies: string[]; // Array of strings for hobbies
};
// Declaring an object `Person` using the defined `Person` type
const person: Person = {
  name: 'Erivan',
  age: 30,
  hobbies: ['Sports', 'Cooking']
};
// Correct the variable name and type for `favoriteActivities`
let favoriteActivities: string[]; // Array of strings
// Correct the initialization of `favoriteActivities`
favoriteActivities = ['Sports', 'Swimming'];
// Iterating over hobbies and fixing method call
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); 
}
console.log(person.name); // Output: Erivan
/*
Define a TypeScript object type called Car with the following properties:
make: a string
model: a string
year: a number
features: an array of strings
Then, declare an object myCar using the defined Car type. The features array should contain at least two features of the car.
Next, declare an array of strings desiredFeatures and assign it with at least two desired car features.
Finally, write a loop that iterates over the features of myCar and logs each feature. Also, log the make and model of myCar.
*/
/*
type Employee = {
  name: string;
  department: string;
  age : number;
  projects: string[];
};
const employee: Employee = {
  name: 'Erivan',
  department: 'Engineering',
  age: 30,
  projects: ['Project A', 'Project B']
};
// the addProject function takes an employee and a project name as arguments and adds the project to the employee's projects array.
function addProject (employee: Employee, projectName: string) {
  employee.projects.push(projectName);
}
addProject(employee, 'Project C');
console.log(employee.projects); // Output: ['Project A', 'Project B', 'Project C']
*/



