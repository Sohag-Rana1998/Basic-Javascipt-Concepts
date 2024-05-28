// we will write a function named matchFinder() which will take two input

function matchFinder(string1, string2) {
 // return error message if the parameters are not string.
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return 'Please provide a string.'
  }
  
  // we will find match between two strings.
  const result = string1.includes(string2);

  // return true false based on the match.
  return result;
}


console.log(matchFinder(34, 'ohn'));
console.log(matchFinder('Javascipt', 'code'));
console.log(matchFinder('Peter parker', 'pet'));
