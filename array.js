// ARRAY IN JS
const myArr=[1,2,3,4,5]
console.log(myArr);

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Accessing Array Elements
console.log(fruits[1]);

// Array methods myArr=[1,2,3,4,5] 
myArr.push(8) //	Add item at end
console.log(myArr);
myArr.pop(8) //remove last item
console.log(myArr);
myArr.shift(8) //remove first item
console.log(myArr);
myArr.unshift(8) // add first item
console.log(myArr);
myArr.includes(8); //	Checks if array contains an element
console.log(myArr);

console.log(myArr.join(".")); //	Converts array to string


// Part 2
// Merge both arrays
let marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Spider-Man"];

let dcHeroes = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman", "Green Lantern"];


marvelHeroes.push(dcHeroes)
console.log(marvelHeroes[3]);

marvelHeroes.concat(dcHeroes)
console.log(marvelHeroes);

const all_New=[...marvelHeroes,...dcHeroes]
console.log(all_New);

// Flat =used to flatten nested arrays into a single-level array.
let arr = [1, [2, [3, [4, 5]]]];
let flatArr = arr.flat(Infinity);
console.log(flatArr); 

console.log(Array.isArray("Niharika"));
console.log(Array.from("Niharika"));



