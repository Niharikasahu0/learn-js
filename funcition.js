// FUNCITION IN JS= functions are blocks of reusable code that perform a specific task
//  Basic Function Syntax
 function functionName(parameters) {
  // code to be executed
}
// 1.Simple Function
function greet() {
  console.log("Hello, Niharika!");
}

greet();
// 2.Function with Parameters
function add(a, b) {
  return a + b;
}
let result = add(5, 3);  
console.log(result);  

// 
 function sayName(){
    console.log("my name is niharika");
 }

//  sayName()
// ADD two numbers
 function addTwoNumbers(num1,num2){
    console.log(num1+num2);
 }
 addTwoNumbers(3,5)

//  another way to write funcition
    function addTwoNumbers(num1,num2){
        return num1+num2
    }
    const result=addTwoNumbers(12,44)
    console.log("result",result);
    
//  
function loginUserMessage(){
    return `${username} just logged in`
}    
console.log(loginUserMessage("Niharika"))

//shopping cart
function addToCart(...num1){
    return num
}
console.log(addToCart(200,300,400))

const user={
    username:"niharika",
    price:100
}
//ARRAY
const myNewArray=[200,300,400,500,600]
function returnSecondValue(getArray){
    return myNewArray[1]
}
console.log(returnSecondValue(myNewArray));

// Returning Values
function multiply(x, y) {
  return x * y;
}

let output = multiply(4, 3);  
console.log(output);
