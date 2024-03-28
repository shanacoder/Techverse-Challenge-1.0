// Arrays and Objects in JavaScript

// Define an array containing various data types
let myArray = [1, 'apple', true, { name: 'John', age: 30 }, [5, 6, 7]];

// Access elements in the array
console.log("First element:", myArray[0]); // Output: 1
console.log("Third element:", myArray[2]); // Output: true

// Modify an element in the array
myArray[1] = 'orange';
console.log("Modified array:", myArray); // Output: [1, 'orange', true, { name: 'John', age: 30 }, [5, 6, 7]]

// Add a new element to the end of the array
myArray.push('banana');
console.log("Array after push:", myArray); // Output: [1, 'orange', true, { name: 'John', age: 30 }, [5, 6, 7], 'banana']

// Define an object with various properties and methods
let myObject = {
    name: 'John',
    age: 30,
    isStudent: false,
    address: {
        street: '123 Main St',
        city: 'New York'
    },
    hobbies: ['reading', 'traveling', 'coding'],
    sayHello: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Access properties of the object
console.log("Name:", myObject.name); // Output: John
console.log("City:", myObject.address.city); // Output: New York

// Call a method of the object
myObject.sayHello(); // Output: Hello, my name is John
