// // SCOPE = visibility of variables.
// // 1.  Global Scope – Use from anywhere
// let myName = "Mini";

// console.log(myName); //
// // 2. Function Scope – Only inside the function
// function greet() {
//   let greeting = "Hello!";
//   console.log(greeting);
// }

// greet(); //cant access here
// // 3.Block Scope – Only inside
// if (true) {
//   let age = 22;
//   console.log(age); 
// }

// console.log(age); not here

// ***ARROW FUNCITION***
// Arrow functions are a shorter and cleaner way to write functions in JavaScript
// const addTwo =(num1,num2)=>{
//  return num1+num2

// }
// console.log(addTwo(2,5));//basic funcition

const addTwo =(num1,num2)=> (num1+num2)


console.log(addTwo(2,5))
