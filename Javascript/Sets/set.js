// Create a Set
const letters = new Set(["a", "b", "c"]);
console.log(letters);

// Add elements to the Set
letters.add("d");
letters.add("e");
letters.add("a"); // Duplicate, won't be added
console.log(letters);

// Check if a value exists in the Set
console.log(letters.has("b"));
console.log(letters.has("z"));

// List all elements in the Set
let text = "";
for (const letter of letters) {
  text += letter + " ";
}
console.log(text.trim());

// Use forEach() to iterate over the Set
letters.forEach((value) => {
  console.log(value);
});

// Get all values from the Set
const valuesIterator = letters.values();
for (const value of valuesIterator) {
  console.log(value);
}

// Get all keys (same as values for Sets)
const keysIterator = letters.keys();
for (const key of keysIterator) {
  console.log(key);
}

// Get [value, value] pairs using entries()
const entriesIterator = letters.entries();
for (const entry of entriesIterator) {
  console.log(entry);
}

// Delete an element from the Set
letters.delete("b");
console.log(letters);

// Find the size of the Set
console.log(letters.size);

// Clear all elements in the Set
letters.clear();
console.log(letters);
