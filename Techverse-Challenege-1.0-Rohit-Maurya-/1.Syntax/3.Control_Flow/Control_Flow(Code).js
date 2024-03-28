// If statement
let num = 10;
if (num > 0) {
    console.log("Number is positive");
} else if (num === 0) {
    console.log("Number is zero");
} else {
    console.log("Number is negative");
}

// Switch statement
let grade = 'B';
switch (grade) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Fair");
        break;
    default:
        console.log("Poor");
}

// While loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Do-While loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// For loop
for (let k = 0; k < 5; k++) {
    console.log(k);
}

// For-In loop (for iterating over object properties)
const person = {
    name: 'John',
    age: 30,
    gender: 'male'
};
for (let key in person) {
    console.log(key + ': ' + person[key]);
}

// For-Of loop (for iterating over iterable objects like arrays)
const colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}

// Break statement
for (let l = 0; l < 5; l++) {
    if (l === 3) {
        break;
    }
    console.log(l);
}

// Continue statement
for (let m = 0; m < 5; m++) {
    if (m === 3) {
        continue;
    }
    console.log(m);
}
