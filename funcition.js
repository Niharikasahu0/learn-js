// Function in js 
// functions are blocks of reusable code that perform a specific task.
// 1. Function Declaration
 function greet(){
    console.log("Good morning Niharika");
    
}
greet();
// 2. Function with Parameters
function addTwonumbers(Number1,Number2){
   console.log( Number1+Number2);
   
}
addTwonumbers(2,3)
// 3. Function Expression
const multiply = function(x, y) {
  return x * y;
};
console.log(multiply(4, 9)); 

function addTwonumbers(Number1,Number2){
    return 
    Number1+Number2
}
const result= addTwonumbers(11,11)
// 4 return value must store in variable
console.log("result",result);

// Function Returning a Value
function square(n) {
  return n * n;
}
result = square(6);
console.log(result); 

function calculateCartprice(...num1){
    return num1 
}
console.log(calculateCartprice(100,200,300));

handleobject({
    username: "sam",
    price: 399
})


// PRACTICE SHEET OF LOOPS AND FUNCITION
// 1.WAP to print the marks of a student in an obj using loop
// obj=( harry:98,Hritik:100,Niharika:50)
let marks={
    harry:50,
    hritik:100,
    niharika:80,
    lovesh:22

}
;

for (let student in marks) {
    console.log(`${student} scored ${marks[student]} marks.`);
}