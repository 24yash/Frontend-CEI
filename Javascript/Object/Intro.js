const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Accessing properties
console.log(person.firstName);
console.log(person["lastName"]);

// Adding new properties
person.nationality = "English";
console.log(person.nationality);

// Deleting properties
delete person.age;
console.log(person.age);

// Nested objects
const myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};
console.log(myObj.myCars.car2);

// JavaScript Object Methods

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

const person2 = { firstName: "Anne", lastName: "Smith" };

// Object.assign()
Object.assign(person1, person2);
console.log(person1);

// Object.values()
console.log(Object.values(person1));

// Object.entries()
console.log(Object.entries(person1));

// JSON.stringify()
console.log(JSON.stringify(person1));

// JavaScript Object Display

const displayPerson = {
  name: "John",
  age: 30,
  city: "New York",
};

// Displaying properties directly
console.log(
  displayPerson.name + ", " + displayPerson.age + ", " + displayPerson.city
);

// Using a loop to display all properties
let text = "";
for (let key in displayPerson) {
  text += displayPerson[key] + " ";
}
console.log(text);

// Using Object.values()
console.log(Object.values(displayPerson));

// Using JSON.stringify()
console.log(JSON.stringify(displayPerson));

// JavaScript Object Constructors

class Car {
  constructor(brand) {
    this.carname = brand;
  }

  present() {
    return `I have a ${this.carname}`;
  }
}

const myCar = new Car("Ford");
console.log(myCar.present());

// Class inheritance
class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  show() {
    return `${this.present()}, it is a ${this.model}`;
  }
}

const myModelCar = new Model("Ford", "Mustang");
console.log(myModelCar.show());
