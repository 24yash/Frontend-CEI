// Array Search Methods
// Example of `find()` method: Finds the first element that satisfies a condition.
const ages = [3, 10, 18, 20];
const firstAdult = ages.find((age) => age > 18);
console.log("First adult age:", firstAdult);

// Example of `findIndex()` method: Finds the index of the first element that satisfies a condition.
const firstAdultIndex = ages.findIndex((age) => age > 18);
console.log("Index of first adult age:", firstAdultIndex);

// Example of `indexOf()` method: Finds the index of a specific value.
const indexOfTen = ages.indexOf(10);
console.log("Index of age 10:", indexOfTen);

// Example of `lastIndexOf()` method: Finds the last occurrence index of a specific value.
const repeatedAges = [3, 10, 18, 20, 10];
const lastIndexOfTen = repeatedAges.lastIndexOf(10);
console.log("Last index of age 10:", lastIndexOfTen);

// Efficient search in large arrays using object mapping (reduces time complexity from O(n) to O(1)).
const arr = [
  { id: 1, value: "Hello 1" },
  { id: 2, value: "Hello 2" },
  { id: 100, value: "Hello 100" },
];
let arrayMap = {};
arr.forEach((el) => {
  arrayMap[el.id] = el;
});
console.log("Element with ID=100:", arrayMap[100]);

// Array Sorting
// Example of `sort()` method: Sorts elements alphabetically or numerically.
const numbers = [40, 100, 1, 5, 25, 10];
numbers.sort((a, b) => a - b);
console.log("Sorted numbers (ascending):", numbers);

numbers.sort((a, b) => b - a);
console.log("Sorted numbers (descending):", numbers);

// Sorting strings alphabetically.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log("Sorted fruits:", fruits);

fruits.sort((a, b) => b.localeCompare(a));
console.log("Reverse sorted fruits:", fruits);

// Array Iteration
// Example of `forEach()` method: Executes a function for each element in the array.
fruits.forEach((fruit) => console.log("Fruit:", fruit));

// Example of `map()` method: Creates a new array by applying a function to each element.
const fruitLengths = fruits.map((fruit) => fruit.length);
console.log("Lengths of fruits:", fruitLengths);

// Example of `filter()` method: Creates a new array with elements that satisfy a condition.
const longFruits = fruits.filter((fruit) => fruit.length > 5);
console.log("Fruits with names longer than five characters:", longFruits);

// Example of `reduce()` method: Reduces an array to a single value.
const totalFruitLength = fruits.reduce(
  (total, fruit) => total + fruit.length,
  0
);
console.log("Total length of fruit names:", totalFruitLength);
