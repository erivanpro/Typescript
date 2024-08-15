//Array & Object Destructuring

// Declaring an array hobbies with initial values 'Sports' and 'Cooking'
const hobbies = ['Sports', 'Cooking'];

// Declaring an array activeHobbies with initial value 'Hiking'
const activeHobbies = ['Hiking'];

// Using the spread operator (...) to push elements of hobbies array into activeHobbies array
activeHobbies.push(...hobbies);

// Declaring an object person with properties firstName and age
const person = {
  firstName: 'Max',
  age: 30
};

// Using the spread operator (...) to create a copy of the person object
const copiedPerson = { ...person };

// Arrow function add with rest parameter (...numbers) to sum up numbers
const add = (...numbers: number[]) => {
  // Using reduce to sum up all numbers
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

// Calling the add function with arguments and storing the result in addedNumbers
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers); // Output: 20.7

// Array Destructuring: Destructuring 'hobbies' array
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2); // Output: ['Sports', 'Cooking'] Sports Cooking

// Object Destructuring: Destructuring 'person' object
const { firstName: userName, age } = person;
console.log(userName, age, person); // Output: Max 30 { firstName: 'Max', age: 30 }


