try {
    let result = 10 / 0; // Potential error: Division by zero
    console.log(result); // This line will not execute if an error occurs above
} catch (error) {
    // Handle the error
    console.error('An error occurred:', error.message); // Output: An error occurred: Division by zero
} finally {
    // This block of code will always execute, regardless of whether an error occurred or not
    console.log('Finally block executed.'); // Output: Finally block executed.
}
