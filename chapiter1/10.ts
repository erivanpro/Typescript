//Tuples types of data 
// Define a TypeScript object type for Person
type Person = {
  name: string;
  age: number;
  hobbies: string[]; // Array of strings for hobbies
  role: [number, string]; // Tuple with a number and a string
};
// Declaring an object `person` using the defined `Person` type
const person: Person = {
  name: 'Erivan',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'] 
};
// Pushing an element into a tuple is allowed but it might not be safe depending on the intended use
// Tuples can have a fixed length, adding more elements might not be intended
person.role.push('admin'); // This line works but adds a third element, which can be unsafe
// Changing an element's type in a tuple breaks type safety
person.role[1] = '10'; // Corrected: 10 (number) changed to '10' (string) to match the tuple type
// Correct the variable name and type for `favoriteActivities`
let favoriteActivities: string[]; // Array of strings
// Correct the initialization of `favoriteActivities`
favoriteActivities = ['Sports', 'Swimming'];
// Iterating over hobbies and fixing method call
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // Print each hobby in uppercase
}
console.log(person.name); // Output: Erivan
