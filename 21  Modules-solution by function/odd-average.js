function oddAverage(numbers) {

  let oddArray = [];
  let avg = 0;


  for (const number of numbers) {
    
    if (number % 2 === 1) {
      oddArray.push(number)

    }

    //console.log(oddArray);

    let sum = 0;
    
    const count = oddArray.length;

    for (const num of oddArray) {
      sum = sum + num;
    }

    console.log(sum, count);
    avg = sum / count;   
  }
return avg;
  
 

}

const num = [23, 44,  55, 32, 55, 66,57];
const avg = oddAverage(num);

console.log(avg);