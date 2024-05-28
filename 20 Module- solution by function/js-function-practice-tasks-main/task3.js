// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


function make_avg(numbers) {
  let sum = 0;
  
  for (const number of numbers) {

    sum = sum + number;
  }
  
  return sum / numbers.length;
}

const nums = [11, 22, 33, 44, 55];
const average = make_avg(nums);
console.log(average);

