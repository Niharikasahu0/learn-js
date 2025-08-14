// *************** FILTER ***************
// filter() → Keep only those items that match the condition.

// Example 1: Even numbers
const nums1 = [1, 2, 3, 4, 5];
const evenNumbers = nums1.filter(num => num % 2 === 0);
console.log(evenNumbers);

// Example 2: Numbers greater than 5
const nums2 = [2, 6, 8, 1, 4, 9];
const bigNumbers = nums2.filter(num => num > 5);
console.log(bigNumbers);

// Example 3: Words with length > 4
const words = ["cat", "elephant", "dog", "lion"];
const longWords = words.filter(word => word.length > 4);
console.log(longWords);

// Example 4: Marks greater than or equal to 50
const marks = [45, 80, 30, 90, 55];
const passed = marks.filter(mark => mark >= 50);
console.log(passed);

// Example 5: Filter books
const books = [
  { name: 'Book 1', genre: 'Fiction', year: 2001 },
  { name: 'Book 2', genre: 'Science', year: 2005 },
  { name: 'Book 3', genre: 'Self-help', year: 2010 },
  { name: 'Book 4', genre: 'Fantasy', year: 2015 },
  { name: 'Book 5', genre: 'History', year: 2020 }
];

let userBooks = books.filter(bk => bk.genre === "Fiction");
console.log(userBooks);

userBooks = books.filter(bk => bk.year >= 2010);
console.log(userBooks);


// *************** MAP ***************
// map() → Change each item and create a new array.

// Example 1: Add 12 to each number
const myNums = [1, 2, 3, 4, 5, 6];
const newArr = myNums.map(num => num + 12);
console.log(newArr);

// Example 2: Double each number
const nums3 = [1, 2, 3, 4];
const doubled = nums3.map(num => num * 2);
console.log(doubled);

// Example 3: Uppercase names
const names = ["mini", "riya", "sana"];
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);

// Example 4: Get only names from objects
const users = [
  { name: "Mini", age: 22 },
  { name: "Riya", age: 21 }
];
const namesOnly = users.map(user => user.name);
console.log(namesOnly);


// *************** CHAINING ***************
// Applying multiple methods one after another.
const no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newnums = no
  .map(nums => nums * 10)  
  .map(num => num + 1)
  .filter(num)=num>=50);
console.log(newnums);

// REDUCE IN JS
