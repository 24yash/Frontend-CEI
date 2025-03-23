// Parent Class
class Car {
  constructor(brand) {
    this.carname = brand; // Initializes the carname property
  }

  // Method in the parent class
  present() {
    return `I have a ${this.carname}`; // Returns a string describing the car
  }
}

// Child Class inheriting from Car
class Model extends Car {
  constructor(brand, mod) {
    super(brand); // Calls the constructor of the parent class (Car)
    this.model = mod; // Initializes the model property
  }

  // Method in the child class
  show() {
    return `${this.present()}, it is a ${this.model}`; // Combines parent and child methods
  }
}

// Creating an object of the child class
const myCar = new Model("Ford", "Mustang");
console.log(myCar.show()); // Outputs: I have a Ford, it is a Mustang

// Explanation of `super()`:
// The `super()` method refers to the parent class.
// It allows access to the parent's properties and methods.

// Getters and Setters

class CarWithGetterSetter {
  constructor(brand) {
    this._carname = brand; // Using underscore to distinguish private property
  }

  // Getter for carname property
  get carname() {
    return this._carname; // Returns the carname value
  }

  // Setter for carname property
  set carname(newName) {
    this._carname = newName; // Updates the carname value
  }
}

// Using getter and setter
const myCar2 = new CarWithGetterSetter("Ford");
console.log(myCar2.carname); // Outputs: Ford (using getter)
myCar2.carname = "Volvo"; // Updates carname using setter
console.log(myCar2.carname); // Outputs: Volvo

class CarHoisting {
  constructor(brand) {
    this.carname = brand;
  }
}

const myCar3 = new CarHoisting("Ford"); // Now works because class is declared before use.
console.log(myCar3.carname); // Outputs: Ford
