// ### Task -1:
// Find the lowest number in the array below.
// <br>
// `const heights2 = [167, 190, 120, 165, 137];`



function findLowestNum(arr) {
  if (!Array.isArray(arr)) {
    return 'Please provide an array'
  }

  let lowestNum = arr[0];

  
    for (const number of arr) {

      if (typeof number !== 'number') {
        return ' Please provide number type value'
      }
    
      else if  (number < lowestNum) {
        lowestNum = number;
      }
    }
  return lowestNum;
}


const arr = [167, 190, 120, 165, 137];
const result = findLowestNum(arr);
console.log(result);
