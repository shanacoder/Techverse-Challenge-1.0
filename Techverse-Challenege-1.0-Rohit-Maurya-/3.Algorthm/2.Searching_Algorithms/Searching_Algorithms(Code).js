// Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if found
        }
    }
    return -1; // Return -1 if not found
}

// Binary Search
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid; // Return the index if found
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1; // Return -1 if not found
}

// Example usage:
const arr = [2, 5, 7, 9, 11, 14, 17, 20, 23];
const target1 = 11;
const target2 = 8;

console.log("Linear Search:");
console.log(`Index of ${target1}:`, linearSearch(arr, target1)); // Output: Index of 11: 4
console.log(`Index of ${target2}:`, linearSearch(arr, target2)); // Output: Index of 8: -1

console.log("\nBinary Search:");
console.log(`Index of ${target1}:`, binarySearch(arr, target1)); // Output: Index of 11: 4
console.log(`Index of ${target2}:`, binarySearch(arr, target2)); // Output: Index of 8: -1
