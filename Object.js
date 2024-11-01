// // 1. Write a function that loops through an array of numbers and returns the sum of the numbers.

// function sumOfNumbers(numbersArray) {
//     let sum = 0;  
//     for (let i = 0; i < numbersArray.length; i++) {
//         sum += numbersArray[i];  
//     }
//     return sum; 
// }


// const numbers = [5, 10, 15, 20, 25];
// const result = sumOfNumbers(numbers);
// console.log(result); 

// // 2. Create an object with properties name and age. Write a function to add a new property city to the object.

// let person = {
//     name: 'Kamrul',
//     age: 30
// };

// function addCityProperty(obj, cityName) {
//     obj.city = cityName; 
// }

// addCityProperty(person, 'Rangpur');
// console.log(person);

// // 3. Write a function that takes a number and returns whether it is even or odd.

// function isEvenOrOdd(number) {
//     if (number % 2 === 0) {
//         return 'Even';  
//     }
//      else {
//         return 'Odd';   
//     }
// }

// console.log(isEvenOrOdd(10)); 
// console.log(isEvenOrOdd(7));  





// // 4. Create an object that represents a car with properties brand and model. Write a function to update the model of the car.

// let car = {
//     brand: 'Toyota',
//     model: 'Corolla'
// };




// function updateCarModel(carObject, newModel) {
//     carObject.model = newModel;  
// }


// updateCarModel(car, 'Camry');
// console.log(car);

// // 5. Write a function that loops through an object and prints each property and its value.

// function printObjectProperties(obj) {
//     for (let key in obj) {
//         console.log(key + ": " + obj[key]);  
//     }
// }

// let car = {
//     brand: 'Toyota',
//     model: 'Camry',
//     year: 2021
// };

// printObjectProperties(car);

// 1. Write a function that compares two strings regardless of case sensitivity using toLowerCase() or toUpperCase(). 
//  Return true if the strings are the same, otherwise return false.

// function comparestrings (str1, str2) {

//     return str1.toLowerCase() === str2.toLowerCase();
// }

// console.log(comparestrings("Hello", "hello"));
// console.log(comparestrings("World", "world"));
// console.log(comparestrings("World", "Hello"));

// Or 


// function comparestrings (str1, str2) {

//     return str1.toUpperCase() === str2.toUpperCase();

// }

// console.log(comparestrings("Hello", "hello"));
// console.log(comparestrings("Hello", "HELLO"));
// console.log(comparestrings("Hello", "WORLD"));


// 2. Create a function that checks if a given sentence contains the word "JavaScript" 
// using the includes() method. Return a message indicating whether the word is found.

// function checkForJavascript(sentence) {
//     if (sentence.includes("Javascript")) {
//         return  "The word 'JavaScript' is found in the sentence.";
//     }
//     else{
//         return "The word 'JavaScript' is not found in the sentence.";
//     }
// }
// console.log( checkForJavascript(" Javascript is a Programming language"));
// console.log( checkForJavascript(" Python is a Programming language"));

// 3. Write a function that splits a sentence into an array of words using split(). Then, use join() 
// to convert the array back into a sentence, separating the words with hyphens (-).

// function splitAndJoinWithHyphens(sentence) {
 
//     let wordsArray = sentence.split(" ");
//     let hyphenatedSentence = wordsArray.join("-");
    
//     return hyphenatedSentence;
// }

// console.log(splitAndJoinWithHyphens("Hello world, this is JavaScript"));
// console.log(splitAndJoinWithHyphens("Split and join example"));

// 4. Create a function that takes a string and extracts a portion using slice(). 
// The function should take a start and an end index as arguments and return the sliced part.
 
// function extractSlice(str, start, end) {
//     return str.slice(start, end);
// }
// console.log(extractSlice("Hello, world!", 0, 5)); 
// console.log(extractSlice("JavaScript is fun", 4, 10)); 
// console.log(extractSlice("OpenAI ChatGPT", 7, 11)); 

// 5. Given an object with properties name, email, and age, use destructuring to extract
// the values into variables and log them to the console.

// const person = {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     age: 30
// };
// const { name, email, age } = person;

// console.log(name); 
// console.log(email);
// console.log(age); 