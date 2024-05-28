function add(a, b) {
  const result = a + b;
  return result;
}

function substract(a, b) {
  const result = a - b;
  return result;
}

function multiply(a, b) {
  const result = a * b;
  return result;
}

function divide(a, b) {
  const result = a / b;
  return result;
}


function calculator( a,operation,b) {
  if (operation === add) {
    const result = add(a, b);
    return result;
  }

  else if (operation === substract) {
    const result = substract(a, b);
    return result;
  }

  else if (operation === multiply) {
    const result = multiply(a, b);
    return result;
  }

  else if (operation === divide) {
    const result = divide(a, b);
    return result;
  }

  else {
    return " Provide only add/substract/multiply/divide command."
  }

}


console.log(calculator( 54869,multiply, 758));