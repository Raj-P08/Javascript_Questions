// 1. Get the last element of the array 

// function getLastElement(arr){
//     return arr[arr.length-1];
// }

// let arr = [1,2,3,5,9,10];
// let result = getLastElement(arr);
// console.log(result);


// let result = arr[arr.length-1]
// console.log(arr.length-1);
// console.log(result);


// 2. Generate the random no. between 0 to 18

// let number = Math.floor(Math.random()*19);
// console.log(number);

// 3.  get the strings from mixed array

// let array = [1,8,"hello","ar",6,8];

// let res  = array.filter((element)=>{
//     if(typeof element === "string"){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(res);


// 4. Combine the two array

// let a1 = [1,8,9,15];
// let a2 = [4,5,7];
// let a3 = a1.concat(a2);
// console.log(a3);
// console.log(a3.length);

// 5. Find the maximum no. of the array

// let ar = [45,18,7,93];
// let res = Math.max(...ar);  // the math method takes only numbers not the array or object
// console.log(res);

// 6. find the length of the  object

// let obj = {
//     name:"blue Diamond",
//     id:1
// }
// console.log(Object.keys(obj).length);

// 6. filter the positive numbers from an array

// let ar = [4,8,-10,8,-96];
// let filteredArray = ar.filter((e)=>e>0);
// console.log(filteredArray);

// Q7:
// const employees = [
//   { name: "Amit",   salary: 25000, active: true },
//   { name: "Rohit",  salary: 18000, active: false },
//   { name: "Sara",   salary: 30000, active: true },
//   { name: "Neha",   salary: 22000, active: true },
//   { name: "Vikram", salary: 15000, active: false },
// ];

// New array banao jisme sirf woh employees hon:
// 1) active === true
// 2) salary >= 22000

// Expected: Amit, Sara, Neha wale objects

// const emp = employees.filter((e)=>e.active==true && e.salary >=22000);
// console.log(emp);

// Q. 8 let an array and return the new array with uppercase strings

// let lowerArray = ["aalu","gobhi","shimla"];

// const upperArray = lowerArray.map((ele)=>{
//   return ele.toUpperCase();
// })

// console.log(upperArray);

//  Q 9. return an array with double the element 

// let a = [7,6,9,10,45];
// const doubleElement = a.map((num)=>num*2);
// console.log(doubleElement);

// Q 10. Given an array make this array flatten

// let b = [8,4,9,[76,9,8],"blue"];

// const flattenArray = b.flat(1);
// console.log(flattenArray);

//      OR

// const flattenArray = b.splice(3,1,...b[3]);
// console.log(flattenArray);

// Q 11.
// Given array may contain duplicates,
// new array banao jisme unique & even numbers sirf hon.

// const arr = [2, 4, 4, 6, 8, 8, 10, 10, 3, 5, 7];

// Expected: [2, 4, 6, 8, 10]
// Edge case: duplicate values, odd numbers mixed

// const uniqueArr = arr.filter((ele,index,ar)=>ele % 2==0 && ar.indexOf(ele) == index)
// console.log(uniqueArr);


// Q. 11 Return a new array with square of each element

// let ar = [5,7,2,9];
// const newArr = ar.map((ele)=>ele*ele);
// console.log(newArr);

// Q. Reverse an array with manual

let arr = [9,8,1,64,45];
const reverseArr = [];
for (let i = arr.length-1; i >= 0; i--) {
    reverseArr.push(arr[i]);
}
console.log(reverseArr);

