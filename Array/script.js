// Q. 1  Reverse Array (Built-in)
// Reverse an array of numbers using reverse method.

// const arr = [8,64,98,5];
// console.log(arr.reverse());

// Q . 2 Check Value Exists
// Check if a given value exists in an array of numbers.

let arr = [4,5,19,6];
const value = Number(prompt("Enter the Num:" ));
if (arr.includes(value)) {
    console.log("num exists");
}else{
    console.log("not exists");
}