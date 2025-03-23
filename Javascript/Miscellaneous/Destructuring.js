// Object Destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

let { firstName, lastName } = person;
console.log(firstName, lastName);

let { lastName: ln, firstName: fn } = person;
console.log(fn, ln);

let { firstName: fName, country = "US" } = person;
console.log(fName, country);

let { lastName: surname } = person;
console.log(surname);

// String Destructuring
let name = "W3Schools";
let [a1, a2, a3, a4] = name;
console.log(a1, a2, a3, a4);

// Array Destructuring
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

let [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2);

let [firstFruit, , thirdFruit] = fruits;
console.log(firstFruit, thirdFruit);

const numbers = [10, 20, 30, 40];
let [num1, num2, ...restNumbers] = numbers;
console.log(num1, num2);
console.log(restNumbers);

// Destructuring Maps
const fruitMap = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

for (const [key, value] of fruitMap) {
  console.log(`${key} is ${value}`);
}

// Swapping Variables
let x = "Hello";
let y = "World";
[x, y] = [y, x];
console.log(x, y);
