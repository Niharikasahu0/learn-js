// Synchronous programming = the code runs line-by-line
// * One task at a time.
// * JavaScript is single-threaded
console.log("Hello");
console.log("How are you?");
console.log("Goodbye");

// Asynchronous Programming in JavaScript=Asynchronous programming allows tasks to run in the background so that the main program can continue executing without waiting for them to finish.
console.log("start");

setTimeout(function(){
    console.log("i am good");
    
},3000)
console.log("end");

// setTimeout=setTimeout is a built-in JavaScript function that allows us  to run some code after a specified delay

