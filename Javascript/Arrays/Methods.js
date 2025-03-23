// Basic Array Methods
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Length of the array
console.log(fruits.length);

// Convert array to a string
console.log(fruits.toString());

// Access elements using `at()` (introduced in ES2022)
console.log(fruits.at(2));
console.log(fruits.at(-1)); // negative indexing

// Joining Array Elements
console.log(fruits.join(" * "));

// Adding and Removing Elements
// Add elements to the end using `push()`
fruits.push("Kiwi");
console.log(fruits);

// Remove the last element using `pop()`
let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);

// Add elements to the beginning using `unshift()`
fruits.unshift("Lemon");
console.log(fruits);

// Remove the first element using `shift()`
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

// Changing Elements
fruits[0] = "Kiwi"; // Change the first element
console.log(fruits);

// Deleting Elements
delete fruits[1]; // Leaves undefined holes
console.log(fruits);

// Concatenating Arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

// Copying Array Elements
const copiedArray = fruits.copyWithin(2, 0);
console.log(copiedArray); // Overwrites elements in the array

// Flattening Arrays
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flatArray = nestedArray.flat();
console.log(flatArray);

// Mapping and Flattening Combined
const numbers = [1, 2, 3];
const mappedFlatArray = numbers.flatMap((x) => [x, x * 10]);
console.log(mappedFlatArray);

// Splicing and Slicing Arrays
// Splice to add/remove elements
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

// Slice to extract a portion of an array
const slicedArray = fruits.slice(1, 3);
console.log(slicedArray);

// Safe Splicing (ES2023)
const months = ["Jan", "Feb", "Mar"];
const newMonths = months.toSpliced(0, 1);
console.log(newMonths);

// Automatic Conversion to String
document.getElementById("demo").innerHTML = fruits.toString();
document.getElementById("demo").innerHTML = fruits;
