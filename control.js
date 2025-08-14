// Control flow = Control flow means how our program runs line by line.

// ========== IF ==========
const temperature = 57;
if (temperature === 44) {
  console.log("less than 50");
} else {
  console.log("more than");
}

// ========== NESTED IF ELSE ==========
const balance = 1000;
if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

// ========== LOGGED IN CHECK ==========
const userLoggedIn = true;
const debitCard = true;
if (userLoggedIn && debitCard) {
  console.log("allow to purchase");
}

// ========== SWITCH ==========
const month = 3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  default:
    console.log("Invalid month");
    break;
}

// ========== TRUTHY AND FALSY ==========
const userEmail = "@123";
if (userEmail) {
  console.log("have email");
} else {
  console.log("don't have email");
}

// There are 7 falsy values:
// false, 0, -0, "", null, undefined, NaN

let name = "";
if (name) {
  console.log("Hello, Mini!");
} else {
  console.log("Please enter your name.");
}

// ========== TERNARY OPERATOR ==========
let age = 18;
let votingResult = (age >= 18) ? "You can vote" : "You cannot vote";
console.log(votingResult);

// ========== BASIC QUESTIONS ==========

// 1. Check if a number is even or odd
let num = 7;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 2. Find the greatest of 3 numbers
let a = 5, b = 12, c = 9;
if (a > b && a > c) {
  console.log("a is greatest");
} else if (b > c) {
  console.log("b is greatest");
} else {
  console.log("c is greatest");
}

// 3. Print days of the week using switch
let day = 4;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// 4. Use a ternary operator to check if a number is positive
let number = -2;
let positivityCheck = number > 0 ? "Positive" : "Negative";
console.log(positivityCheck);

// 5. Print numbers 1 to 5, skip 3 using continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
