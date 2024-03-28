// Define a class representing a Person
class Person {
    // Constructor to initialize name and age properties
    constructor(name, age) {
        // Public properties
        this.name = name;
        this.age = age;
        // Private property (using naming convention)
        this._isAdult = age >= 18; 
    }

    // Method to greet the person
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }

    // Getter method for _isAdult (Encapsulation)
    isAdult() {
        return this._isAdult;
    }
}

// Define a subclass representing an Employee, extending Person
class Employee extends Person {
    // Constructor to initialize name, age, and position properties
    constructor(name, age, position) {
        // Call the superclass constructor using super()
        super(name, age);
        // Private property specific to Employee
        this._position = position;
    }

    // Method to perform work
    work() {
        console.log(`${this.name} is working as a ${this._position}.`);
    }

    // Method overriding the greet method of the superclass
    greet() {
        // Call the greet method of the superclass using super
        super.greet();
        console.log(`I work as a ${this._position}.`);
    }
}

// Create an instance of the Employee class
let employee1 = new Employee('Alice', 25, 'Developer');

// Call the greet method inherited from Person
employee1.greet(); // Output: Hello, my name is Alice and I'm 25 years old. I work as a Developer.

// Call the work method specific to Employee
employee1.work(); // Output: Alice is working as a Developer.

// Accessing private properties through getters
console.log(`${employee1.name} is an adult: ${employee1.isAdult()}`); // Output: Alice is an adult: true
