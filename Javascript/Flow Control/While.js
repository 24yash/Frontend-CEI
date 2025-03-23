// 1: Basic while loop
let i = 0;
while (i < 5) {
  console.log("The number is " + i);
  i++;
}

// 2: Loop through an array
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let index = 0;
while (index < cars.length) {
  console.log(cars[index]);
  index++;
}

// 3: Using `break` in a while loop
let j = 0;
while (j < 5) {
  if (j === 3) break;
  console.log("Value of j: " + j);
  j++;
}

// 4: Using `continue` in a while loop
let k = 0;
while (k < 5) {
  k++;
  if (k === 3) continue;
  console.log("Value of k: " + k);
}

// 5: Descending order with a while loop
const fruits = ["Apple", "Banana", "Cherry", "Date"];
let len = fruits.length - 1;
while (len >= 0) {
  console.log(fruits[len]);
  len--;
}

// 6: Infinite loop prevention
let counter = 0;
while (true) {
  console.log("Counter is " + counter);
  counter++;
  if (counter === 10) break;
}
