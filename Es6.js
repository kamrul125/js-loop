// 1. Define a function with two parameters, assigning a default value to the second one. Call it with both one and two arguments,
//and show the outputs.


function intro (name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
    
}
intro("kamrul")
intro("Kamrul", "Hi");

// 2. Create a function that takes a name and a city as input and returns a multi-line message using template literals,
//  incorporating both variables

function createFunction(name, city) {
return `Hello ${name}!
Welcome to ${city}.
We hope you enjoy your stay and have a great time exploring the city!`

}

console.log(createFunction("Kamrul", "Rangpur"));

//3. Combine two arrays using the spread operator and find the maximum value in the merged array.

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combinedNumbers = [...numbers1, ...numbers2];
const maxNumber = Math.max(...combinedNumbers);
console.log( "Maximum Value:", maxNumber); 

//4. Create an object with properties name, age, and country, and use destructuring to extract them into variables.
//  Also, destructure an array of five numbers to get the first two elements.


const person = { name: "Alice", age: 25, Country: "Bangladesh" };
const { name, age, Country} = person;

console.log(name);
console.log(age);
console.log(Country);

const members = ["Kamrul", "Shopon", "Rafi", "Shanta", "Ripon"];
const [a, b] = members
console.log(a);
console.log(b);

// 5. Access the city property of a nested object using both dot notation and optional chaining.
const user = {
    name: "Alice",
    address: {
        city: "Paris",
        country: "France"
    }
};
using Dot Notation

const city = user.address.city;
console.log(city);

using Optional Chaining

const city = user.address?.city;
console.log(city);

// 6.Given an array of student objects with properties name and marks, use:map() to extract the names.

const students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 78 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 88 }
];
const studentNames = students.map(student => student.name);
const studentMarks = students.map(student => student.marks);

console.log(studentNames);
console.log(studentMarks);

// 6. filter() to return students with marks above 80.

const students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 55 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 }
];

const passedStudents = students.filter(student => student.marks > 80);
console.log(passedStudents);

// 7.Use map() on a string array to create a new array where each string is prefixed with "Hello, ".

const names = ["Kamrul", "Rafi", "Rahim"];
const greetingNames = names.map(name => `Hello, ${name}`);
console.log(greetingNames); 

// 9. Given an array of objects, use filter() to return all objects where a specific condition is met 
// (e.g., products priced above a certain amount).

const products = [
    { name: "Laptop", price: 1500 },
    { name: "Phone", price: 700 },
    { name: "Tablet", price: 300 },
    { name: "Monitor", price: 200 },
    { name: "Keyboard", price: 100 }
];
const expensiveProducts = products.filter(product => product.price > 500);

console.log(expensiveProducts); 

// 10. You have an array of product objects, where each product has a name and price. Write a function 
// that uses the map method to create a new array of strings. Each string should contain the product's
//  name and price formatted as Product: [name] costs $[price].

const products = [
    { name: "Laptop", price: 1500 },
    { name: "Phone", price: 700 },
    { name: "Tablet", price: 300 }
];

function formatProductInfo(products) {
    return products.map(product => `Product: ${product.name} costs $${product.price}`);
}

const productInfoArray = formatProductInfo(products);
console.log(productInfoArray);

