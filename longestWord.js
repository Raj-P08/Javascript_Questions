// Programming Question: Longest word in a String
// write a function find longest word that takes a string as input and returns the longest word in the string. If there are multiple longest word, return the first one encountered,

// Constraints:
// The Input string way contain alphabetic characters, digits, spaces, and punctuation.
// The input string is non-empty.
// The input string may contain multiple words separated by spaces.
//Note:
// If the input string is empty or contains only whitespace, the function should return as false.
// The function should ignore leading and trailing whitespace when determining the Longest wort.

// * Solution:
// 1. Split the input string into an array of words using the split() method.

const findLongestWord = (str) => {
  if (str.trim().length === 0) return false;

  const words = str.split(" ");
  //   words.sort((a, b) => b.length - a.length);

  //   console.log(words);

  //   return words[0];

  //   ! Other way to find the longest word
  return words.reduce(
    (acc, currWord) => (currWord.length > acc.length ? currWord : acc),
    ""
  );
  // 2. Use the reduce() method to iterate through the array of words and find the longest word.
  // 3. Return the longest word found.
};
console.log(findLongestWord("Hii there! How are you?"));
