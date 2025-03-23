let singleQuoteString = "Hello, World!";
let doubleQuoteString = "Hello, World!";
console.log(singleQuoteString);
console.log(doubleQuoteString);

// Strings are indexed starting at 0
let exampleString = "JavaScript";
console.log(exampleString[0]);

// JavaScript String Methods

let text = "Hello, JavaScript!";

// Length of a string
console.log(text.length);

// Extracting characters
console.log(text.charAt(0));
console.log(text.charCodeAt(0));

// Searching within strings
console.log(text.indexOf("JavaScript"));
console.log(text.lastIndexOf("!"));

// Checking if a string includes a substring
console.log(text.includes("Java"));

// Extracting parts of a string
console.log(text.slice(7, 17));
console.log(text.substring(7, 17));

// Replacing text in a string
let newText = text.replace("JavaScript", "JS");
console.log(newText);

// Splitting a string into an array
let words = text.split(" ");
console.log(words);

// Changing case
console.log(text.toLowerCase());
console.log(text.toUpperCase());

// Removing whitespace from the start and end
let paddedText = "   Hello   ";
console.log(paddedText.trim());

// Repeating strings
console.log("Hi! ".repeat(3));

// JavaScript String Search

let searchText = "Visit W3Schools!";
let position = searchText.search("W3Schools");
console.log(position);

// Using regular expressions for case-insensitive searches
let regexPosition = searchText.search(/w3schools/i);
console.log(regexPosition);

// Replace using regular expressions (case-insensitive)
let replacedText = searchText.replace(/w3schools/i, "Tutorial");
console.log(replacedText);

// JavaScript String Templates (Template Literals)

let name = "John";
let greeting = `Hello, ${name}!`;
console.log(greeting);

// Multiline strings with template literals
let multilineString = `This is line one.
This is line two.
This is line three.`;
console.log(multilineString);

// Expression substitution in template literals
let price = 50;
let taxRate = 0.1;
let totalPrice = `Total Price: ${(price * (1 + taxRate)).toFixed(2)}`;
console.log(totalPrice);

// HTML templates with template literals
let header = "Welcome";
let tags = ["HTML", "CSS", "JavaScript"];
let htmlTemplate = `<h1>${header}</h1><ul>`;
tags.forEach((tag) => {
  htmlTemplate += `<li>${tag}</li>`;
});
htmlTemplate += `</ul>`;
console.log(htmlTemplate);
