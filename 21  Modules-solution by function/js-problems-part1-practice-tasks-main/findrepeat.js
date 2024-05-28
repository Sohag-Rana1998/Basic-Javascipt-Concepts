// ### Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input:
// numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// <br/>

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

const arr = [5, 6, 11, 12, 98, 5];

const result = countRepeatedNumber(arr, 5);

function countRepeatedNumber(arr, targetNumber) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetNumber) {
      count++;
    }
  }

  return count;
}

console.log(result);

