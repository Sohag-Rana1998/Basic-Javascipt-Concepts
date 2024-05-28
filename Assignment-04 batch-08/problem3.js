// we will make a function nemed sortMaker(), Which will take an array as input;

function sortMaker(arr) {
  const [a, b] = arr;

  // if one of a elements is negative then return invalid input;
  if (a < 0 || b < 0) {
    return 'Invalid input';
  }

  // if the elements are equal return as "equal"
 if (a == b) {
    return 'equal';
  }

  // if the elements are positive sort by descending;
  if (a > b) {
    return [a, b];
  }

  else {
    return [b, a];
  }

}

// access the elements as a input array.
console.log(sortMaker([2, 3]));
console.log(sortMaker([4,2]));
console.log(sortMaker([4,4]));
console.log(sortMaker([1,2]));
console.log(sortMaker([2,-4]));