// Using Interfaces with Classes
// Interface definition for a Greetable object
interface Greetable {
  name: string; // Property name of type string
  // Method greet with parameter phrase of type string and returning void
  greet(phrase: string): void;
}
// Class Person implementing the Greetable interface
class Person implements Greetable {
  name: string; // Property name of type string
  age = 30; // Property age with default value 30
  // Constructor to initialize the name property
  constructor(n: string) {
    this.name = n;
  }
  // Method greet implementation
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name); // Logs the phrase followed by the name
  }
}
// Declaring a variable user1 of type Greetable
let user1: Greetable;
// Assigning an instance of Person to user1
user1 = new Person('Max');
// Calling the greet method on user1
user1.greet('Hi there - I am'); // Outputs: Hi there - I am Max
console.log(user1); // Outputs: Person { name: 'Max', age: 30 }
