// // **PROMISE IN JS**
// A Promise is an object in JavaScript that represents the result of an asynchronous operation.
// It can be in one of three states:
// Pending 
// Fulfilled 
// Rejected 
let promise=new promise(function(resolve,reject){
   resolve(44)

})

console.log("hello")
setTimeout(function(){
    console.log("hello in 2 sec");
    
},2000)
console.log("my name is"+"NIHARIKA");






// const PromiseOne = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("async task is completed");
//         resolve(); // mark the promise as fulfilled
//     }, 3000);
// });

// PromiseOne.then(function() {
//     console.log("promise is completed");
// });


// //
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("task completed");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("2 completed");
    
// })
