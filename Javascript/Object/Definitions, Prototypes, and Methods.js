// Object Definitions

// 1. Using Object Literals
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  start: function () {
    console.log(`${this.brand} ${this.model} is starting...`);
  },
};
car.start();

// 2. Using the `new Object()` Constructor
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;
person.greet = function () {
  console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
};
person.greet();

// 3. Using Object.create()
const animalPrototype = {
  speak: function () {
    console.log(`${this.name} makes a noise.`);
  },
};
const dog = Object.create(animalPrototype);
dog.name = "Buddy";
dog.speak();

// Object Prototypes

// Example of setting a prototype using `Object.create()`
const humanPrototype = {
  introduce: function () {
    console.log(`Hi, I am ${this.name}.`);
  },
};
const student = Object.create(humanPrototype);
student.name = "Alice";
student.introduce();

// Example of using constructor functions with prototypes
function Employee(name, position) {
  this.name = name;
  this.position = position;
}
Employee.prototype.work = function () {
  console.log(`${this.name} is working as a ${this.position}.`);
};
const emp1 = new Employee("Bob", "Manager");
emp1.work();

// Object Methods

// Example of defining methods directly in an object
const book = {
  title: "JavaScript Essentials",
  author: "Jane Doe",
  getDetails: function () {
    return `${this.title} by ${this.author}`;
  },
};
console.log(book.getDetails());

// Adding a method dynamically
book.getUpperCaseTitle = function () {
  return this.title.toUpperCase();
};
console.log(book.getUpperCaseTitle());

// Using built-in object methods
const user = {
  id: 1,
  username: "coder123",
};

console.log(Object.keys(user)); // ["id", "username"]
console.log(Object.values(user)); // [1, "coder123"]
console.log(Object.entries(user)); // [["id", 1], ["username", "coder123"]]

// Using `for...in` to iterate over object properties
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

// Copying properties using Object.assign()
const userClone = Object.assign({}, user);
console.log(userClone);

// Freezing an object to prevent modifications
Object.freeze(userClone);

// Creating objects from arrays using Object.fromEntries()
const entries = [
  ["name", "Alice"],
  ["age", 25],
];
const newUser = Object.fromEntries(entries);
console.log(newUser);
