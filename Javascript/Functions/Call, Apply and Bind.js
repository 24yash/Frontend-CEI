// Call Method
const person1 = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  },
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person1.fullName.call(person2, "Oslo", "Norway"));

// Apply Method
console.log(person1.fullName.apply(person2, ["Oslo", "Norway"]));

const numbers = [1, 2, 3];
console.log(Math.max.apply(null, numbers));

// Bind Method
const person3 = {
  firstName: "Hege",
  lastName: "Nilsen",
};

const boundFullName = person1.fullName.bind(person3, "Stockholm", "Sweden");
console.log(boundFullName());

// Preserving `this` using bind
const person4 = {
  firstName: "Jane",
  lastName: "Smith",
  display: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

setTimeout(person4.display.bind(person4), 3000);
