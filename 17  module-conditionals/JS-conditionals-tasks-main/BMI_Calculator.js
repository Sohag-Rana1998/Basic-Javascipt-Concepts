/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/




let weightOfPerson = 55;
let heightOfPerson = 1.60;

let BMI= weightOfPerson/ (heightOfPerson*2);
console.log(BMI.toFixed(2));

if (BMI>0 && BMI<18.5 ){
    console.log('You are underweight. You should be eat more');
}

else if(BMI>18.5 && BMI<24.9) {
    console.log('You are in normal weight.')
    
}
else if ( BMI>25 && BMI< 29.9){
    console.log('You are overweight. You should diet for loose your weight')
}

else { console.log('you are obese');
    
}