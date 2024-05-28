//make sum of all elements of the array.
// if the sum is greater than or equal second parameter return true
// else return false.
// the array is emply then return an error message.
// Make  a function named as canPay(), this will take two input parameter.


function canPay(changeArray, totalDue) {

  if (changeArray.length == 0) {
    return "Your array is empty."
  }


  let sum = 0;
  for (const number of changeArray) {
     sum = sum + number;
  }

  if (sum >= totalDue) {
    return true;

  }
  else {
    return false;
  }
 
}


const arr = [1,4,4];
const due = 10;
 
const results = canPay(arr, due);

console.log(results);