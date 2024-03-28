class Queue {
    constructor() {
        this.queue = []; // Initialize an empty array to represent the queue
    }

    // Enqueue operation: Adds an element to the back of the queue
    enqueue(element) {
        this.queue.push(element); // Add the element to the end of the array
    }

    // Dequeue operation: Removes and returns the front element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue Underflow"; // If the queue is empty, return an error message
        }
        return this.queue.shift(); // Remove and return the first element of the array
    }

    // Peek operation: Returns the front element from the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty"; // If the queue is empty, return an error message
        }
        return this.queue[0]; // Return the first element of the array
    }

    // Utility function to check if the queue is empty
    isEmpty() {
        return this.queue.length === 0; // Returns true if the queue is empty, false otherwise
    }

    // Utility function to get the size of the queue
    size() {
        return this.queue.length; // Returns the number of elements in the queue
    }
}

// Example usage:
let queue = new Queue(); // Create a new queue object

queue.enqueue(10); // Enqueue element 10
queue.enqueue(20); // Enqueue element 20

console.log("Front element:", queue.peek()); // Output: Front element: 10
console.log("Queue size:", queue.size()); // Output: Queue size: 2

console.log("Dequeued element:", queue.dequeue()); // Output: Dequeued element: 10
console.log("Queue size after dequeue:", queue.size()); // Output: Queue size after dequeue: 1
