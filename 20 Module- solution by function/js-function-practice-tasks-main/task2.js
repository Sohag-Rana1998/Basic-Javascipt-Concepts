// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


function conditions(number) {
  let result = 0;
  if (number % 2 === 1) {
     result = number * 2;
   
  }

  else {
    result = number / 2;
  }
 return result;
}


const result = conditions(55);

console.log(result);
