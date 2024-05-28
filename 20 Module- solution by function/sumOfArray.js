
function sumOfArray(numbers){

   console.log(numbers);

   let sum = 0;

   for (const number of numbers) {
    console.log(number);
    sum = sum + number;
  
   }

  return sum;

}

const numbs =[22,44,33,55];

const sum = sumOfArray(numbs);

console.log(sum);
