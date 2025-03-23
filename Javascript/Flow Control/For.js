// Standard For Loop
for (let i = 0; i < 5; i++) {
  console.log("Standard For Loop:", i);
}

// For/In Loop
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log("For/In Loop:", key, "=", person[key]);
}

// For/Of Loop
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log("For/Of Loop:", fruit);
}

// Using Break Statement
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log("Break Example:", i);
}

// Using Continue Statement
for (let i = 0; i < 10; i++) {
  if (i === 5) continue;
  console.log("Continue Example:", i);
}

// Nested For Loops
const adjectives = ["red", "big", "tasty"];
for (let adj of adjectives) {
  for (let fruit of fruits) {
    console.log("Nested Loop:", adj, fruit);
  }

  // Empty For Loop
  for (let i = 0; i < 3; i++) {
    // Empty block
  }
  console.log("Empty loop executed without errors.");
}
