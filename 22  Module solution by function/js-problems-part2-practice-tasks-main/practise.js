function repeatNumber(arr,repeat) {
  let count = 0;

  for (let i = 0; i < arr.length; i++){

    if (arr[i] === repeat) {
      count++;
    }
  }


  return count;
}
const arr = [0, 1, 0, 1, 1, 0, 3, 2, 1];
const result = repeatNumber(arr, 1);

console.log(result);