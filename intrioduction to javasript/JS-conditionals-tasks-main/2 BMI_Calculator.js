/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const BMI = 30;

if (BMI <18)   {
    console.log("under weight")
}
else if(BMI>18 && BMI<24){
    console.log('Normal weight')
}

else if (BMI>24 && BMI <28){
    console.log('Over weight')
}

else{
    console.log('obese')
}