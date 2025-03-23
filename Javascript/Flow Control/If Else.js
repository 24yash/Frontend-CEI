// Example 1: Basic if statement
let hour = new Date().getHours();
if (hour < 18) {
  console.log("Good day");
}

// Example 2: if...else statement
if (hour < 18) {
  console.log("Good day");
} else {
  console.log("Good evening");
}

// Example 3: if...else if...else statement
if (hour < 10) {
  console.log("Good morning");
} else if (hour < 20) {
  console.log("Good day");
} else {
  console.log("Good evening");
}

// Example 4: Random decision-making using Math.random()
let text;
if (Math.random() < 0.5) {
  text = "Visit W3Schools";
} else {
  text = "Visit WWF";
}
console.log(text);

// Example 5: Validating input data using if...else
let x = 7;
let feedback;
if (isNaN(x) || x < 1 || x > 10) {
  feedback = "Input not valid";
} else {
  feedback = "Input OK";
}
console.log(feedback);

// Example 6: Nested if statements for complex conditions
let age = 25;
if (age >= 18) {
  if (age >= 21) {
    console.log("You are an adult and can drink alcohol.");
  } else {
    console.log("You are an adult but cannot drink alcohol.");
  }
} else {
  console.log("You are not an adult.");
}
