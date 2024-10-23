// 1. Write a function that loops through an array of numbers and returns the sum of the numbers.

function sumOfNumbers(numbersArray) {
    let sum = 0;  
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];  
    }
    return sum; 
}


const numbers = [5, 10, 15, 20, 25];
const result = sumOfNumbers(numbers);
console.log(result); 

// 2. Create an object with properties name and age. Write a function to add a new property city to the object.

let person = {
    name: 'Kamrul',
    age: 30
};

function addCityProperty(obj, cityName) {
    obj.city = cityName; 
}

addCityProperty(person, 'Rangpur');
console.log(person);

// 3. Write a function that takes a number and returns whether it is even or odd.

function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Even';  
    }
     else {
        return 'Odd';   
    }
}

console.log(isEvenOrOdd(10)); 
console.log(isEvenOrOdd(7));  

// 4. Create an object that represents a car with properties brand and model. Write a function to update the model of the car.

let car = {
    brand: 'Toyota',
    model: 'Corolla'
};

function updateCarModel(carObject, newModel) {
    carObject.model = newModel;  
}

updateCarModel(car, 'Camry');
console.log(car);

// 5. Write a function that loops through an object and prints each property and its value.

function printObjectProperties(obj) {
    for (let key in obj) {
        console.log(key + ": " + obj[key]);  
    }
}

let car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2021
};

printObjectProperties(car);




