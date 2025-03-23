// Creating an Array
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

const fruits = [];
fruits[0] = "Banana";
fruits[1] = "Orange";
fruits[2] = "Apple";
console.log(fruits);

const numbers = new Array(1, 2, 3, 4);
console.log(numbers);

// Accessing Array Elements
console.log(cars[0]);

// Changing an Array Element
cars[0] = "Opel";
console.log(cars);

// Array Properties and Methods
console.log(fruits.length);
console.log(fruits.toString());

// Looping Through Arrays
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

cars.forEach(function (car) {
  console.log(car);
});

// Adding Array Elements
fruits.push("Mango");
console.log(fruits);

fruits[fruits.length] = "Pineapple";
console.log(fruits);

// Removing Array Elements
fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

// Associative Arrays (Not Supported in JavaScript)
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
console.log(person.length);
console.log(person["firstName"]);

// Nested Arrays and Objects
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

for (let i in myObj.cars) {
  console.log(myObj.cars[i].name);
  for (let j in myObj.cars[i].models) {
    console.log(myObj.cars[i].models[j]);
  }
}

// How to Check if a Variable is an Array
const fruitsCheck = ["Banana", "Orange"];
console.log(Array.isArray(fruitsCheck));
console.log(fruitsCheck instanceof Array);

const sparseArray = [];
sparseArray[5] = "Lemon";
console.log(sparseArray);
