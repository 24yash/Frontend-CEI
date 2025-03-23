// Class Syntax
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }

  ageWithYear(currentYear) {
    return currentYear - this.year;
  }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

console.log(`My car is ${myCar1.age()} years old.`);
console.log(`My car is ${myCar2.age()} years old.`);

const currentYear = new Date().getFullYear();
console.log(`My car is ${myCar1.ageWithYear(currentYear)} years old.`);

// "use strict" mode in classes
class StrictExample {
  constructor(value) {
    this.value = value;
  }

  strictMethod() {
    let declaredVariable = "This works";
    console.log(declaredVariable);
  }
}

const example = new StrictExample("Test");
example.strictMethod();
