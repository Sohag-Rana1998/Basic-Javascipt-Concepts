// ### Task -2:
// Find the friend with the smallest name.
// <br>
// `const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];`


function findSmallestName(arr) {
  let smallest = arr[0];

  for (const small of arr) {
    
    if (small.length < smallest.length) {
      smallest = small;
    }
  
  }
  return smallest;
}

const arr = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const result = findSmallestName(arr);

console.log(result);