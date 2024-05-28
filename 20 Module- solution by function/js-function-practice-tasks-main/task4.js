// ### Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.



function count_zero(str) {
let tempArray = str.split('')
  const char = {};

  for (const number of tempArray) {
    if (!char[number]) {
      char[number]=1
    }
    else {
      char[number]++;
    }
  }
  
  
  return char;

}

const arguments = '0100100110010001011';

const result = count_zero(arguments);

console.log(result);
