
// ### Task-4:
// Write a function to find the longest word in a given string.

// sample-input:
// I am learning Programming to become a programmer

// sample-output: Programming

// ----


function findLongestWord(text) {
  text = text.split(' ');
  
  
  let longestWords = text[0];

  for (let i = 0; i < text.length; i++){

    if (text[i].length > longestWords.length) {
      longestWords= text[i];
    }
  }
  return longestWords
}

const text = " I am learning Programming to become a programmer";
const longestWord1 = findLongestWord(text);

console.log(longestWord1);