// ! Write a function in javascript to find if a given number is prime or not.
// A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers.
// For example, 5 is prime because the only way to get 5 is by multiplying 1 and 5.
// 4 is not prime because it can be formed by multiplying 2 and 2.
// 1 is not prime because it is not greater than 1.
// 0 and negative numbers are not prime.

function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(5)); // true
