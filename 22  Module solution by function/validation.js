function multiply(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return " Please provide a valid number";
  }
  else {
    return num1 * num2;
  }
  
}

const result = multiply('five', 6);
//console.log(result);

function fullName(first, second) {
  if (typeof first !== 'string' || typeof second !== 'string') {
    return 'Please provide a string type name';
  }

  else {
    return first + ' ' + second;
  }

}

const result1 = fullName(5, 'Rana');
//console.log(result1);

 
function getPrice(product) {
  if (typeof product !== 'object') {
    return 'Please provide a object';
  }

  else {
    const price = product.price;
    return price;
  }

}

//const price = getPrice({ name: 'mobile', price: 15000, color: 'black' });

const price = getPrice(5000);

//console.log(price);


function getArr(arr) {
  if (Array.isArray(arr) === false) {
    return "Please provide an array"
  }

  else {
    const second = arr[1];
    return second;
  }

}

//const array = [12, 23, 43, 43];

const array = 50;

const second = getArr(array);
console.log(second);