console.log("Niharika Sahu");

// ----------------------
// VARIABLES
// ----------------------
var a1 = 12;
let b1 = "SIRT";
const c = 2003;
console.log(a1, b1, c);

let snack = "momo";
let b2 = 6;
let loveJs = true;
console.log(loveJs);
console.log(typeof loveJs);

let x;
console.log(x);

let student = {
    name: "Mini",
    age: 22,
    branch: "CSE"
};
console.log(typeof student);

// ----------------------
// OPERATORS QUESTIONS
// ----------------------

// Q1. Addition
let num1 = 12;
const num2 = 33;
console.log(num1 + num2);

// Q2. Even or Odd
let num3 = 129;
if (num3 % 2 == 0) {
    console.log("even");
} else {
    console.log("odd");
}

// Q3. Vote Checker
let age = 19;
if (age > 18) {
    console.log("vote");
} else {
    console.log("not vote");
}

// Q4. Grade Calculator
let marks = 50;
if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else {
    console.log("C");
}

// ----------------------
// LOOPS QUESTIONS
// ----------------------

// Q1. Print 0 to 10
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Q2. Print "I love JavaScript" 5 times using while loop
let i = 1;
while (i <= 5) {
    console.log("I love JavaScript");
    i++;
}

// Q3. Continue example (won’t print anything here because of continue before console.log)
for (let i = 0; i <= 5; i++) {
    if (i === 2) continue;
    console.log(i);
}

// Q4. Reverse the loop
let fruit = ["apple", "banana", "mango", "orange"];
for (let i = fruit.length - 1; i >= 0; i--) {
    console.log(fruit[i]);
}

// ----------------------
// SWITCH QUESTIONS
// ----------------------

// Q5. Fruit Color Checker
let favFruit = "banana";
switch (favFruit) {
    case "apple":
        console.log("apple is red");
        break;
    case "banana":
        console.log("banana is yellow");
        break;
    case "grape":
        console.log("grape is green");
        break;
    default:
        console.log("unknown fruit");
}

// Q6. Weekday Printer
let day = 7;
switch (day) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("Invalid day");
}

// Q7. Grade Checker
let grade = "B";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    default:
        console.log("Fail");
}

// ----------------------
// LOOPS MORE PRACTICE
// ----------------------

// Q8. Print "I love JS" 5 times
for (let i = 0; i <= 5; i++) {
    console.log("I love JS");
}

// Q9. Loop from 1 to 10 but skip 3
for (let i = 1; i <= 10; i++) {
    if (i == 3) continue;
    console.log(i);
}

// Q10. Loop that stops at 6 using break
for (let i = 1; i <= 10; i++) {
    if (i == 6) break;
    console.log(i);
}

// ----------------------
// STRING QUESTIONS
// ----------------------
let str = "JavaScript is fun";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.includes("fun"));
console.log(str.charAt(4));

// Q11. Reverse the string "hello" using loop
let string = "hello";
let reversed = "";
for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
}
console.log(reversed);

// let word="mini"
// for (let i=word.length-1;i>=0,i--)
//     console.log(i);


// #STRING METHODS
let a="Mini"
console.log("Mini".length);
console.log("Mini".toUpperCase());
console.log("Mini".toLowerCase());
console.log("Mini".charAt(2));
console.log("Mini".includes("n"));

let i=1;
while(i<=3){
    console.log(i);
    i++
    
}

let k="mini";
let i=1;
while(i<=4){
    console.log(k);
    i++
    
}

let word="Javascript";
let count=0;
for(i=0;i<word.length,i++) {
    let letter=word[i].toLowerCase();
    if(
        letter==="a"||
        
        letter==="e"||
        
        letter==="i"||
        
        letter==="o"||
        
        letter==="u"||
    ){
        count++:
    }
}
console.log("no of vowel",count);

// **ARRAY**
let color=["red","pink","purple"]
console.log(color[1]);


let flower=["lily","rose"]
flower.push("sun flower")
console.log(flower);


