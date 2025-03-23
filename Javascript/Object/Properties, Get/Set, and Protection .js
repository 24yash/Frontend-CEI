// Object Properties
let student = {
  name: "Chris Hemsworth",
  age: 21,
  branch: "Computer Science",
};

// Accessing properties
console.log(student.name);
console.log(student["age"]);
let property = "branch";
console.log(student[property]);

// Adding, updating, and deleting properties
student.grade = "A";
console.log(student);
student.age = 22;
console.log(student);
delete student.branch;
console.log(student);

// Object Getters and Setters
let user = {
  firstName: "John",
  lastName: "Doe",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(name) {
    let parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

console.log(user.fullName);
user.fullName = "Jane Smith";
console.log(user.firstName);
console.log(user.lastName);

// Object Protection
const car = { type: "Fiat", model: "500", color: "white" };

// Prevent adding new properties
Object.preventExtensions(car);
car.year = 2020;
console.log(car);
console.log(Object.isExtensible(car));

// Seal an object
Object.seal(car);
car.color = "blue";
delete car.model;
console.log(car);
console.log(Object.isSealed(car));

// Freeze an object
Object.freeze(car);
car.color = "red";
delete car.type;
console.log(car);
console.log(Object.isFrozen(car));

// Using `const` with objects
const person = { name: "Alice", age: 30 };
person.age = 31;

// Strict mode with protection methods
(function () {
  "use strict";
  const obj = { key: "value" };
  Object.preventExtensions(obj);
  try {
    obj.newKey = "newValue";
  } catch (e) {
    console.error(e.message);
  }
})();
