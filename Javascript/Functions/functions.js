// Function Declaration
function greet() {
  console.log("Hello, World!");
}
greet();

// Function Expression
const add = function (a, b) {
  return a + b;
};
console.log(add(3, 5));

// Arrow Function (ES6+)
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

// Function with Parameters
function subtract(x, y) {
  return x - y;
}
console.log(subtract(10, 4));

// Default Parameters
function greetUser(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greetUser();
greetUser("Alice");

// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4));

// The `arguments` Object (non-arrow functions only)
function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) max = arguments[i];
  }
  return max;
}
console.log(findMax(1, 123, 500, 115, 44));

// Returning Values
function square(number) {
  return number * number;
}
console.log(square(5));

// Nested Functions
function calculate(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
console.log(calculate(3, 4));

// Anonymous Functions
setTimeout(function () {
  console.log("This runs after 2 seconds.");
}, 2000);

// Immediately Invoked Function Expressions (IIFE)
(function () {
  console.log("IIFE executed!");
})();

// Passing Functions as Arguments
function executeFunction(func) {
  func();
}
executeFunction(() => console.log("Function passed as an argument."));

// Returning Functions
function createMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}
const double = createMultiplier(2);
console.log(double(5));

// Scope and Closures
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}
const newFunction = outerFunction("outside");
newFunction("inside");

// Object Methods
const person = {
  name: "John",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};
person.greet();

// Arrow Functions and `this`
const arrowPerson = {
  name: "Jane",
  greet: () => {
    console.log(`Hi, I'm ${this.name}`);
  },
};
arrowPerson.greet();
