// JS Variables

// 1. Automatically (not recommended)
x = 5;
y = 6;
z = x + y; // z will be 11

// 2. Using var (function-scoped)
var carName = "Volvo";
var price;
price = 50000;

// 3. Using let (block-scoped)
let message = "Welcome!";
let count = 0;

// Block scope example
let outsideVar = "I'm outside";
{
  let insideVar = "I'm inside";
  let outsideVar = "I'm shadowing the outer variable";
}

// 4. Using const (block-scoped, cannot be reassigned)
const PI = 3.14159;
const DAYS_IN_WEEK = 7;
