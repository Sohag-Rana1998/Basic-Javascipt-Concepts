// making a cube by the provide number

function cubeNumber(number) {
  // return error message if provide other accept number:
  if (typeof number !== 'number') {
  return "Please provide a valid number"
  }
  
  // convert the number to cude

  const result = Math.pow(number, 3);

  return result;
}

console.log(cubeNumber(5));