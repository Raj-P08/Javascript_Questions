// Q1:
// const nums = [3, 6, 8, 2, 11, 4, 15];

// New array banao jisme sirf woh numbers hon
// jo 5 se bade ( > 5 ) hain.
// Expected: [6, 8, 11, 15]

// const resNums = nums.filter((num)=>num>5);
// console.log(resNums);

// Q2:
// const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// New array banao jisme sirf even numbers ho.
// Expected: [2, 4, 6, 8]

// const evenNum = nums.filter((n)=> n % 2 == 0);
// console.log(evenNum);

// Q3:
// const ages = [12, 19, 25, 16, 30, 18];

// New array banao jisme sirf 18 ya usse zyada age wale ho.
// Expected: [19, 25, 30, 18]

// const mature = ages.filter((age)=> age >= 18);
// console.log(mature);

// Q4:
// const words = ["hi", "hello", "ok", "javascript", "code", "no"];

// New array banao jisme sirf woh words hon
// jinki length 3 se badi ho.
// Expected: ["hello", "javascript", "code"]

// const shortWords = words.filter((word)=> word.length > 3);
// console.log(shortWords);


// Q5:
const employees = [
  { name: "Amit",   salary: 25000, active: true },
  { name: "Rohit",  salary: 18000, active: false },
  { name: "Sara",   salary: 30000, active: true },
  { name: "Neha",   salary: 22000, active: true },
  { name: "Vikram", salary: 15000, active: false },
];

// New array banao jisme sirf woh employees hon:
// 1) active === true
// 2) salary >= 22000

// Expected: Amit, Sara, Neha wale objects

const emp = employees.filter((e)=>e.active==true && e.salary >=22000);
console.log(emp);