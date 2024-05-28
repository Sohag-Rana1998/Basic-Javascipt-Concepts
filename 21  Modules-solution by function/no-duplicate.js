const nameArr = ['abul', 'babul', 'cabul', 'abul', 'dabul', 'abul', 'cabul'];

const numArr = [11, 22, 33, 11, 44, 33, 55, 44];


function noDuplicate(numbers) {
  let uniqueArr = [];

for (const number of numbers) {
  
  if (uniqueArr.includes(number) === false) {
  
    uniqueArr.push(number);
  }
  
  }
  return uniqueArr;
  
}

const nameUnique = noDuplicate(nameArr);
const numbUnique = noDuplicate(numArr);

console.log(nameUnique);
console.log(numbUnique);