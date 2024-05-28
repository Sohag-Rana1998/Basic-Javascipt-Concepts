function maxNum(num1, num2, num3) {

  if (num1 > num2 && num1 > num3) {
    return num1;
  }
  else if (num2 > num1 && num2 > num3) {
    return num2;
  }
  else {
    return num3;
}


}

const maxNumb = maxNum(45, 65, 25);

console.log(maxNumb);


// Another way----------->>>>

console.log(Math.max(34, 432, 55, 46));
console.log(Math.min(34, 432, 55, 46));