// <!-- ### Task-2

// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// **Input:**
// </br>
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// **Output:**
// </br>
// Print the result in 2 decimal places.

// ---

// **Sample Input:**
// </br>
// 75.25, 65, 80, 35.45, 99.50

// **Sample Output:**
// </br>
// 71.04 -->



let bangla =75.25;
let english = 65;
let math = 80;
let physics = 35.45;
let chemistry = 99.50;

let totalMark = bangla + english + math + physics + chemistry;

let averageMark = totalMark / 5;

console.log(averageMark.toFixed(2));

//output: 71.04