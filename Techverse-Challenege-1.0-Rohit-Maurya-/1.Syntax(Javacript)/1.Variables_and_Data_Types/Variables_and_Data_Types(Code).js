// Variable declaration using var, let, and const
var x = 10; // Variable x declared with var
let y = "Hello"; // Variable y declared with let
const PI = 3.14; // Constant PI declared with const

// Explanation:
// - var: Used for variable declaration. Variables declared with var are function-scoped or globally scoped. They can be re-declared and updated.
// - let: Introduced in ES6. Used for block-scoped variables. Variables declared with let are only accessible within the block where they are defined. They can be updated but not re-declared within the same scope.
// - const: Introduced in ES6. Used to declare constants. Variables declared with const cannot be re-assigned or re-declared. They are block-scoped like let.

// Primitive Data Types
let num = 42; // Number: Represents numeric values, including integers and floating-point numbers.
let str = "JavaScript"; // String: Represents sequences of characters enclosed within single (' ') or double (" ") quotes.
let bool = true; // Boolean: Represents a logical value, either true or false.
let undef; // Undefined: Represents a variable that has been declared but has not been assigned a value. Variables that have not been initialized have the value undefined.
let n = null; // Null: Represents the intentional absence of any object value. It is often used to signify a variable with no value.
let sym = Symbol("foo"); // Symbol: Represents a unique identifier. Symbols are often used as keys in objects to avoid property name collisions.

// Complex Data Type
let person = {
    name: "John",
    age: 30,
    isStudent: false
};

// Explanation:
// - Object: Represents a collection of key-value pairs where values can be of any data type, including other objects. Objects are used to store collections of data and more complex entities.

// Usage
console.log(x); // Output: 10
console.log(str); // Output: JavaScript
console.log(bool); // Output: true
console.log(person); // Output: { name: "John", age: 30, isStudent: false }
