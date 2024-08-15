// enum 
// Define an enum named Role with three possible values: ADMIN, READ_ONLY, and AUTHOR
enum Role {
  ADMIN,      // Role.ADMIN is implicitly assigned the value 0
  READ_ONLY,  // Role.READ_ONLY is implicitly assigned the value 1
  AUTHOR      // Role.AUTHOR is implicitly assigned the value 2
}
// Define a constant person object with various properties
const person = {
  name: 'Erivan',             // A string property for the person's name
  age: 30,                        // A number property for the person's age
  hobbies: ['Sports', 'Cooking'], // An array property for the person's hobbies
  role: Role.READ_ONLY            // An enum property for the person's role, set to Role.READ_ONLY
};
// Conditional check to see if the person's role is ADMIN
if (person.role === Role.ADMIN) {
  // If the role is ADMIN, log 'User is an admin.' to the console
  console.log('User is an admin.');
} 
// Conditional check to see if the person's role is READ_ONLY
else if (person.role === Role.READ_ONLY) {
  // If the role is READ_ONLY, log 'User is read-only.' to the console
  console.log('User is read-only.');
} 
// Conditional check to see if the person's role is AUTHOR
else if (person.role === Role.AUTHOR) {
  // If the role is AUTHOR, log 'User is an author.' to the console
  console.log('User is an author.');
}
