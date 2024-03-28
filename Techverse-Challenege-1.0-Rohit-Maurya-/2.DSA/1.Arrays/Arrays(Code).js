// One-dimensional Array
let numbers = [1, 2, 3, 4, 5];

// Accessing Elements of a One-dimensional Array
console.log(numbers[0]); // Output: 1

// Multi-dimensional Array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Accessing Elements of a Multi-dimensional Array
console.log(matrix[1][2]); // Output: 6

// Dynamic Array (Adding Elements)
let dynamicArray = [1, 2, 3];
console.log(dynamicArray); // Output: [1, 2, 3]

dynamicArray.push(4);
console.log(dynamicArray); // Output: [1, 2, 3, 4]

// Dynamic Array (Removing Elements)
dynamicArray.pop();
console.log(dynamicArray); // Output: [1, 2, 3]

// Sparse Array
let sparseArray = [1, , , 4]; // Creates a sparse array with holes
console.log(sparseArray.length); // Output: 4
console.log(sparseArray); // Output: [1, <2 empty items>, 4]

// Traversing Sparse Array
sparseArray.forEach((element, index) => {
    console.log(`Index ${index}: ${element}`);
});
// Output:
// Index 0: 1
// Index 3: 4

// Array Operations (Insertion)
let arr = [1, 2, 3, 5];
arr.splice(3, 0, 4); // Inserting element 4 at index 3
console.log(arr); // Output: [1, 2, 3, 4, 5]

// Array Operations (Deletion)
arr.splice(2, 1); // Deleting element at index 2
console.log(arr); // Output: [1, 2, 4, 5]

// Array Operations (Traversal)
arr.forEach((element, index) => {
    console.log(`Index ${index}: ${element}`);
});
// Output:
// Index 0: 1
// Index 1: 2
// Index 2: 4
// Index 3: 5

// Array Operations (Search)
let index = arr.indexOf(4); // Searching for element 4
console.log(index); // Output: 2 (index of element 4)
