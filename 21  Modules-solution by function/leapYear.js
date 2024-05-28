// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     return true;
//   }

//   else {
//     return false;
//   }
// }

// const result = isLeapYear(2045);
// console.log(result);



function isLeapYear1(year) {
  
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  }

  else if (year % 400 === 0) {
    return true;
  }
  else {
    return false;
  }
}

const isLeap = isLeapYear1(2000);
const isLeap1 = isLeapYear1(2100);
const isLeap2 = isLeapYear1(2500);
const isLeap3 = isLeapYear1(2052);

console.log(isLeap, isLeap1, isLeap2, isLeap3);