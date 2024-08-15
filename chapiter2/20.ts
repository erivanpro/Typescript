// First Interface Example
// Interface definition for a Person
interface Person {
  name: string; // Property name of type string
  age: number; // Property age of type number
  // Method greet with parameter phrase of type string and returning void
  greet(phrase: string): void;
}
// Declaring a variable user1 of type Person
let user1: Person;
// Assigning an object to user1 that implements the Person interface
user1 = {
  name: 'Max', // Property name is 'Max'
  age: 30, // Property age is 30
  // Method greet implementation
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name); // Logs the phrase followed by the name
  }
};
// Calling the greet method on user1
user1.greet('Hi there - I am'); // Outputs: Hi there - I am Max
