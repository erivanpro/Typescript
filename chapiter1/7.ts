// Defining a TypeScript object type with `name`, `age`, and `nickname` properties
type Person = {
  name: string;
  age: number;
  nickname: string; // Add the `nickname` property
};
// Declaring an object `person` using the defined `Person` type
const person: Person = {
  name: 'Erivan',   
  age: 30,
  nickname: 'Max', // Provide a value for the `nickname` property
};
// This will no longer cause an error because `nickname` is now a property of `person`
console.log(person.nickname);


/* 
Define a TypeScript object type called Student with the following properties:
name: a string
age: a number
courses: an array of strings
Then, declare an object student using the defined Student type. The courses array should contain the names of the courses the student is taking.
Finally, write a line of code to log the student's name and the courses they are taking
*/

/*
Define a TypeScript object type called Library with the following properties:
name: a string
address: a string
books: an array of objects, where each object represents a book and has the following properties:
title: a string
author: a string
isAvailable: a boolean
Then, declare an object library using the defined Library type. The books array should contain at least two book objects.
Finally, write a function getAvailableBooks that takes a Library object as an argument and returns an array of the titles of all books that are available. Call this function with your library object and log the result.
*/

/*type Library = {
  name : string;
  address : string;
  books : {title : string, author : string, isAvailable : boolean}[];
};
const library : Library = {
  name : 'Central Library',
  address : '123 Main St',
  books : [
    {title : 'Book1', author : 'Author1', isAvailable : true},
    {title : 'Book2', author : 'Author2', isAvailable : false},
    {title : 'Book3', author : 'Author3', isAvailable : true}
  ]
};
function getAvailableBooks(library: Library) {
  return library.books.filter(book => book.isAvailable).map(book => book.title);
}
console.log(getAvailableBooks(library));
*/




