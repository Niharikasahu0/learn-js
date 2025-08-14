const arr=[1,2,3,4,5]
for(const num of arr){
    // console.log(num,);
    
}
const greeting="Namaste everyone"
for (const greet of greeting) {
    // console.log(`each char is ${greet}`)
    
 
}
//  basic MAPS
// A Map is a built-in JavaScript object that stores key–value pairs.
let myMap = new Map();
myMap.set("name", "Mini");
myMap.set("age", 22);
myMap.set("isStudent", true);
console.log(myMap);

// Get values
console.log(myMap.get("name"));
console.log( myMap.get("age"));

// Check if a key exists
console.log(myMap.has("isStudent"));
//loop
for (const [key,value] of myMap) {
    console.log(key,":-",value);
}
// LOOPS IN OBJECT(for in loop)
let myObject = {
    name: "Batman",
    realName: "Bruce Wayne",
    city: "Gotham",
    superPower: "Peak human strength"
};

for (const key in myObject) {
    console.log(key, ":", myObject[key]);
}

//
const coding=['js','c++','py','rb']
coding.forEach( function (item){
    console.log(item);
    

})

const myNums = [1, 2, 3, 4, 5, 6, 7];
const newNums = myNums.filter(nums => nums > 4);
console.log(newNums);

