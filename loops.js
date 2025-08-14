// LOOPS = A block of code that runs again and again until a condition remains true 

// 1. FOR LOOP → Used when we know how many times to repeat
console.log("----- FOR LOOP: 1 to 10 -----");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Nested FOR LOOP (example placeholder, not working because 'array' is not defined)
console.log("----- NESTED FOR LOOP: placeholder -----");
// let array = ["a", "b", "c"]; // You can uncomment this line if needed
// for (let i = 1; i <= 10; i++) {
//     for (let j = 0; j < array.length; j++) {
//         const element = array[j];
//         console.log(element);
//     }
// }

// FOR LOOP with array
console.log("----- FOR LOOP: myArray -----");
let myArray = ["flashmen", "superman", "batman"];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
    console.log("Array length:", myArray.length);
}

// break and continue
console.log("----- FOR LOOP with BREAK -----");
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("5 detected");
        break;
    }
    console.log(i);
}

// while loop: print 1 to 5
console.log("----- WHILE LOOP: 1 to 5 -----");
let w = 1;
while (w <= 5) {
    console.log(w);
    w++;
}

// while loop: print 10 to 0
console.log("----- WHILE LOOP: 10 to 0 -----");
let x = 10;
while (x >= 0) {
    console.log(x);
    x--;
}

// DO...WHILE LOOP: 1 to 5
console.log("----- DO WHILE LOOP: 1 to 5 -----");
let y = 1;
do {
    console.log(y);
    y++;
} while (y <= 5);

// DO...WHILE LOOP: 1 to 3
console.log("----- DO WHILE LOOP: 1 to 3 -----");
let z = 1;
do {
    console.log(z);
    z++;
} while (z <= 3);

// DO...WHILE LOOP: reverse 5 to 1
console.log("----- DO WHILE LOOP: 5 to 1 -----");
let r = 5;
do {
    console.log(r);
    r--;
} while (r >= 1);
