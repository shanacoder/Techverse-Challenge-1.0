class Stack {
    constructor() {
        this.stack = []; // Initialize an empty array to represent the stack
    }

    // Push operation: Adds an element to the top of the stack
    push(element) {
        this.stack.push(element); // Add the element to the end of the array
    }

    // Pop operation: Removes and returns the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack Underflow"; // If the stack is empty, return an error message
        }
        return this.stack.pop(); // Remove and return the last element of the array
    }

    // Peek operation: Returns the top element from the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty"; // If the stack is empty, return an error message
        }
        return this.stack[this.stack.length - 1]; // Return the last element of the array
    }

    // Utility function to check if the stack is empty
    isEmpty() {
        return this.stack.length === 0; // Returns true if the stack is empty, false otherwise
    }

    // Utility function to get the size of the stack
    size() {
        return this.stack.length; // Returns the number of elements in the stack
    }
}

// Example usage:
let stack = new Stack(); // Create a new stack object

stack.push(10); // Push element 10 onto the stack
stack.push(20); // Push element 20 onto the stack

console.log("Top element:", stack.peek()); // Output: Top element: 20
console.log("Stack size:", stack.size()); // Output: Stack size: 2

console.log("Popped element:", stack.pop()); // Output: Popped element: 20
console.log("Stack size after pop:", stack.size()); // Output: Stack size after pop: 1
