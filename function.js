// Write a function called addNumbers that takes two numbers as parameters and returns their sum.

function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log (addNumbers( 10, 8));

// Write a function called sumUpToN that takes a number n and returns the sum of all numbers from 1 to n. Use a loop.

function sumUpToN(n) {
    let sum = 0; 

    for (let i = 1; i <= n; i++) {
        sum += i;  
    }

    return sum;  
}
console.log(sumUpToN(5));

// Write a function called sumArray that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

function sumArray(arr) {
    let sum = 0;  

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];  
    }

    return sum;  
}

console.log(sumArray ( [1, 2, 3, 4, 5]));

console.log(sumArray ( [ 1, 2, 3, -4, 5 ]));

// 4. Write a function called countEvenNumbers that takes an array of numbers as a parameter and returns the count of even numbers in the array.

function countEvenNumbers(arr) {
    let count = 0;  // Initialize the count to 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;  // Increment count if the number is even
        }
    }

    return count;  // Return the final count
}

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6])); 
console.log(countEvenNumbers([10, 15, 20, 25, 30]));

// 5. Write a function called stringLength that takes a string as a parameter and returns the length of the string.


function stringLength(str) {
    return str.length;
}
console.log(stringLength("JavaScript"));
