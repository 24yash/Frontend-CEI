// Basic Callback Example
function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// Function Sequence
function firstFunction() {
  console.log("Hello");
}

function secondFunction() {
  console.log("Goodbye");
}

firstFunction();
secondFunction();

// Using Callback for Sequence Control
function displayResult(result) {
  console.log("The result is: " + result);
}

function calculateAndDisplay(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}

calculateAndDisplay(10, 20, displayResult);

// Array Example with Callback
const numbers = [4, 1, -20, -7, 5, 9, -6];

function removeNegatives(arr, callback) {
  const positiveNumbers = [];
  for (const num of arr) {
    if (callback(num)) {
      positiveNumbers.push(num);
    }
  }
  return positiveNumbers;
}

const isPositive = (x) => x >= 0;

const positiveNumbers = removeNegatives(numbers, isPositive);
console.log(positiveNumbers);
