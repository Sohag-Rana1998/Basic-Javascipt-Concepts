// function inchToFeet(inch) {
//   const feet = inch / 12;
//   return feet;

// }

// const shuvoHeight = inch(67);

// console.log(shuvoHeight);


// Feet + inch



function inchToFeet(inch) {
  const feet = inch / 12;
  const feetOnly = parseInt(feet);
  const remaininginch = inch % 12;
  const result = `${feetOnly} feet ${remaininginch} inch`

  return result;

}

const shuvoHeight = inchToFeet(67);

console.log(shuvoHeight);





function mileToKilo(miles) {
  
  const kilo = miles * 1.6;
  return kilo;
}

const results = mileToKilo(5);
console.log(results);




function kiloToMile(kilo) {
  
  const mile  = kilo * 0.621;
  return mile;
}

const result = kiloToMile(5);
console.log(result);