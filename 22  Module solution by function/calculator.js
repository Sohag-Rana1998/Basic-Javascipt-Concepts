function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

function substrack(num1, num2) {
  const result = num1 - num2;
  return result;
}

function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

function divide(num1, num2) {
  const result = num1 / num2;
  return result;
}



function calculator(a, b, operation) {

  if (typeof a !== 'number' || typeof b !== 'number') {
    return " Please provide a valid number ";
}
  else if (operation === 'add') {
    const result = add(a, b);
    return result;
  }

  else if (operation === 'substrack') {
    const result = substrack(a, b);
    return result;
  }

  else if (operation === 'multiply') {
    const result = multiply(a, b);
    return result;
  }

  else if (operation === 'divide') {
    const result = divide(a, b);
    return result;
  }

  else {
   return  "Only 'add':, 'substrack':, 'multiply':, 'divide': operation are allowed."
  }
}


const result = calculator(6, 8, 'add');

console.log(result);

const result1 = calculator(8, 7, 'substrack');

console.log(result1);

const result2 = calculator(6, 8, 'multiply'); 

console.log(result2);

const result3 = calculator(6, 8, 'divide');

console.log(result3);

const result4 = calculator(6, 8, 'dgryhtr');

console.log(result4);

