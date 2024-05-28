/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const sakib = 95;
const mehedi =88;
const rakib = 80;
const sahel = 75;
const hasan = 90;
const hossen = 91;
const najmul = 65;
const showrab = 70;

const mark = 45;

// Grading system 

if (mark>=90 && mark <=100){
    console.log('Grade A')
}
else if(mark >=80 && mark <= 89) {
console.log('Grade B')
}
else if(mark >=70 && mark <= 79) {
console.log('Grade C')
}
else if(mark >=60 && mark <= 69) {
console.log('Grade D')
}
else if(mark >=50 && mark <= 59) {
console.log('Grade F')
}

else{
    console.log('Faill')
}