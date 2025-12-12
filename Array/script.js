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

// Q.6 Find Maximum and Minimum
// Find the maximum and minimum values in an array of numbers.

let array = [8,4,6,2,15,98,1];
const sortedArray = array.sort((a,b)=>a-b);
const min = sortedArray[0];
const max = sortedArray[sortedArray.length - 1];

console.log(`Minimum value is: ${min}`);
console.log(`Maximum value is: ${max}`);

// alternative method
const max1 = Math.max(...array);
const min1 = Math.min(...array);
console.log(`Maximum value is: ${max1}`);
console.log(`Minimum value is: ${min1}`);

// Q.7 Sum of Elements
// Calculate the sum of all elements in an array of numbers.

let numbers = [5,10,15,20,25];
let sum = 0;
for(let i = 0;i<numbers.length;i++){
    sum += numbers[i];
}
console.log(`The sum of all elements is: ${sum}`);

// alternative method
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`The sum of all elements is: ${total}`);

// Q.8 Average of Elements
// Calculate the average of all elements in an array of numbers.
let nums = [10,20,30,40,50];
let totalSum = 0;
for(let i = 0;i<nums.length;i++){
    totalSum += nums[i];
}
let average = totalSum / nums.length;
console.log(`The average of all elements is: ${average}`);

// alternative method
const sumOfElements = nums.reduce((acc, curr) => acc + curr, 0);
const avg = sumOfElements / nums.length;
console.log(`The average of all elements is: ${avg}`);


//  ***********
// Q. 9. Rotate Array
// Rotate an array of numbers to the right by k steps.

// let ar = [1,2,6,4,8,9]
// let k = 8;

// let tempArr = [];

// if(k>ar.length){
//     k = k % ar.length;
//     console.log(k);
// }

// for(let i = k+1; i<ar.length;i++){
//     tempArr.push(ar[i]);
// }

// console.log(tempArr);

// for(let i= 0;i<=k; i++){
//     tempArr.push(ar[i]);
// }

// console.log(tempArr);

// Q. 10.  Split into Chunks
// Split an array into chunks of size k (last chunk can be smaller).

// let ar=[1,2,3,4,6,5,9,8,7,10];

// let k = 3;
// let temp = [];
// for(let i = 0; i<ar.length; i=k+i){
//    let newA =  ar.slice(i,i+k);
//    temp.push(newA);
// }

// console.log(temp);

// ****************
// Q. 11. Flatten 2D Array
// Flatten a 2D array (one level deep) into a 1D array.

// let ar = [4,5,6,["bdit",8,9, ["rj",79]],10, [45,69]];

// If there are nested array and we have to flat the array then in one step we can use "Infinity" parameter in the flat method.
// let result = ar.flat(Infinity);
// console.log(result);

// Q. 12.Split Even and Odd
// Given an array of numbers, split it into two arrays: one with even and one with odd
// numbers.

// let arrr = [10,6,8,5,9,3,17,2];
// let even = [];
// let odd = [];
// for(let i = 0; i<arrr.length; i++){
//     if(arrr[i] % 2 === 0 ){
//         even.push(arrr[i])
//     }else{
//         odd.push(arrr[i])
//     }
// }
// console.log(even);
// console.log(odd);


// const even1 = arrr.filter((e)=>e%2===0)
// console.log(even1);


// Working with Object Arrays ****************

// ! Filter by City
// * 1. Given an array of user objects 
// * { name, age, city }, return all users who live in "Mumbai".

let ar = [
    {name:"Raj",age:22,city:"mumbai"},
    {name:"Ajay",age:25,city:"Mumbai"},
    {name:"Ani",age:20,city:"Kolkata"},
    {name:"Mayank",age:22,city:"Thane"},
];

// const filterArray = ar.filter((e)=>e.city.toLowerCase()=="mumbai");
// console.log(filterArray);


// * 2.  Extract Names
// * From the same users array, return only the name values in a new array.






// https://www.perplexity.ai/spaces/new-space-NWqkHmKDQtOvQod2sbwV.Q#0


// https://www.perplexity.ai/search/hey-gpt-BTlNfVydT3KV4Lep03eIgg#7