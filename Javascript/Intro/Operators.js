let a = 10;
let b = 3;

// Arithmetic Operators
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus (Remainder):", a % b);

// Assignment Operators
let x = 5;
console.log("Initial value of x:", x);

x += 2;
console.log("After x += 2:", x);

x -= 1;
console.log("After x -= 1:", x);

x *= 3;
console.log("After x *= 3:", x);

x /= 2;
console.log("After x /= 2:", x);

x %= 4;
console.log("After x %= 4:", x);

// Increment and Decrement Operators
let y = 10;
console.log("Initial value of y:", y);

console.log("Post-increment (y++):", y++);
console.log("Value of y after post-increment:", y);

console.log("Pre-increment (++y):", ++y);

console.log("Post-decrement (y--):", y--);
console.log("Value of y after post-decrement:", y);

console.log("Pre-decrement (--y):", --y);

// Complex Operation
let z = 15;
z += a * b - (b % a);
console.log("Complex operation result in z:", z);

// Ternary Operator
let isEven = z % 2 === 0 ? "Even" : "Odd";
console.log(`The number ${z} is ${isEven}.`);
