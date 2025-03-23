// Number Properties
console.log(Number.EPSILON); // Difference between 1 and the smallest number greater than 1
console.log(Number.MAX_VALUE); // Largest number possible in JavaScript
console.log(Number.MIN_VALUE); // Smallest number possible in JavaScript
console.log(Number.MAX_SAFE_INTEGER); // Maximum safe integer
console.log(Number.MIN_SAFE_INTEGER); // Minimum safe integer
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // Negative infinity
console.log(Number.NaN); // Not-a-Number

// Number Methods
let num = 123;
console.log(num.toString()); // Converts a number to a string

let expNum = 123.456;
console.log(expNum.toExponential(2)); // Converts to exponential notation

let fixedNum = 123.456;
console.log(fixedNum.toFixed(2)); // Formats with specified decimals

let preciseNum = 123.456;
console.log(preciseNum.toPrecision(4)); // Formats to specified length

let primitiveNum = new Number(123);
console.log(primitiveNum.valueOf()); // Returns primitive value

console.log(Number.parseInt("123")); // Parses a string to an integer
console.log(Number.parseInt("123.45")); // Parses a string to an integer
console.log(Number.parseFloat("123.45")); // Parses a string to a float

console.log(Number.isFinite(123)); // Checks if a value is finite
console.log(Number.isFinite(Infinity)); // Checks if a value is finite

console.log(Number.isInteger(123)); // Checks if a value is an integer
console.log(Number.isInteger(123.45)); // Checks if a value is an integer

console.log(Number.isSafeInteger(9007199254740991)); // Checks if a value is a safe integer
console.log(Number.isSafeInteger(9007199254740992)); // Checks if a value is a safe integer

// Custom Number Prototype Method
Number.prototype.half = function () {
  return this.valueOf() / 2;
};
let customNum = 100;
console.log(customNum.half()); // Custom method example

// Special Cases
let invalidOperation = 100 / "Apple";
console.log(invalidOperation); // NaN example

let infiniteResult = 1 / 0;
console.log(infiniteResult); // Infinity example
