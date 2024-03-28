// Import the 'fs' module for file system operations
const fs = require('fs');

// File path
const filePath = 'example.txt';

// Writing to a file synchronously
const dataToWriteSync = 'Hello, world (synchronously)!';
fs.writeFileSync(filePath, dataToWriteSync, 'utf8');
console.log('Data has been written to the file synchronously.');

// Reading from a file synchronously
try {
    const fileContentSync = fs.readFileSync(filePath, 'utf8');
    console.log('File content (synchronously):', fileContentSync);
} catch (error) {
    console.error('An error occurred while reading the file synchronously:', error);
}

// Writing to a file asynchronously
const dataToWriteAsync = 'Hello, world (asynchronously)!';
fs.writeFile(filePath, dataToWriteAsync, 'utf8', (error) => {
    if (error) {
        console.error('An error occurred while writing to the file asynchronously:', error);
        return;
    }
    console.log('Data has been written to the file asynchronously.');
});

// Reading from a file asynchronously
fs.readFile(filePath, 'utf8', (error, fileContentAsync) => {
    if (error) {
        console.error('An error occurred while reading the file asynchronously:', error);
        return;
    }
    console.log('File content (asynchronously):', fileContentAsync);
});
