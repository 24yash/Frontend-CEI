// Defining a Function
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Function Syntax
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));

// Function Invocation
function sayHello() {
  console.log("Hello, World!");
}
sayHello();

// Return Statement
function multiply(x, y) {
  return x * y;
}
let result = multiply(4, 5);
console.log(result);

// Why Functions?
function calculateArea(length, width) {
  return length * width;
}
console.log(calculateArea(10, 5));

// The () Operator
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
console.log(toCelsius(77));

// Accessing a function without `()` returns the function object itself.
let funcRef = toCelsius;
console.log(funcRef(77));

// Functions Used as Variable Values
let temperature = `The temperature is ${toCelsius(77)} Celsius`;
console.log(temperature);

// Local Variables
function myFunction() {
  let carName = "Volvo";
  console.log(carName);
}
myFunction();

// Self-Invoking Functions
(function autoInvoke() {
  console.log("This function runs automatically!");
})();

// Example Combining Concepts
function calculateDiscount(price, discountRate) {
  let discount = (price * discountRate) / 100;
  return price - discount;
}
console.log(calculateDiscount(1000, 10));
