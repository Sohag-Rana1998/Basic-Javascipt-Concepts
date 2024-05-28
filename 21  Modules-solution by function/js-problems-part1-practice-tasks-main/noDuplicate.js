const biryaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];
const result = noDuplicate(biryaniKhor)

function noDuplicate(numbers) {
  let newarr = [];
  for (const number of numbers){
    if (newarr.includes(number) === false)
      newarr.push(number);
  }
  return newarr;
}

console.log(result);