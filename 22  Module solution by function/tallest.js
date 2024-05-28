function getMax(numbers) {
  
 let max = numbers[0];
  for (const number of numbers) {
    
   
    if (number > max ) {
      max = number;
    }
  }
  return max;

}

const height = [65, 66, 78, 68, 72,56];

const tallest = getMax(height);

console.log(tallest);