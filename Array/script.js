// Q. 1  Reverse Array (Built-in)
// Reverse an array of numbers using reverse method.

// const arr = [8,64,98,5];
// console.log(arr.reverse());

// Q . 2 Check Value Exists
// Check if a given value exists in an array of numbers.

// const prompt = require("prompt-sync")(); // sirf Node.js
// const ar = [8,9,4,45,69];
// const value = Number(prompt("Enter the Random Number: "));

// if(ar.includes(value)){
//     console.log("number exists");
// }else{
//     console.log("number not exists");
// }

// Here we are facing one prblem that is prompt is not defined. 
// It is showing cause prompt is working only in browser window.
//  We cannot use the prompt in vs code or terminal execution.
//  to resolve this we can use the HTML file and run the file then the prompt will display
//  to use the prompt in vs code there are 2 ways.
// Option A : Use (prompt-sync) package
// const prompt = require("prompt-sync")(); // sirf Node.js
//  for the above we have to install package i.e. npm install prompt-sync

// Option B : we can use the manual value for the variable means hard code

// Q.3 Count Occurrences
// Count how many times a given value appears in an array.

// let arr = [4,5,7,5,9,12,5,7];
// let value = 5;
// let count = 0;
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]===value){
//         count += 1;
//     }
// }

// console.log(`the number ${value} is occuring ${count} times`);

// Q. 4 Remove Duplicates
// Remove all duplicate values from an array of numbers and return the unique values.

// let arr = [15,8,9,15,6,8,10,6,4,45,90];
// let unique = Array.from(new Set(arr));
// console.log(unique);

// Q.5 sort the array
//  sort the array in ascending order

let arr = [8,10,4,1,19];
console.log(arr.sort((a,b)=>a-b));

// descending

console.log(arr.sort((a,b)=>b-a));