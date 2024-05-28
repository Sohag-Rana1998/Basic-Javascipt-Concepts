/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let mark = 79;

if(mark<=100 && mark>=90){
    console.log('Grade:A');}

    else if (mark<=89 && mark>=80){
        console.log('Grade:B');
    }
    else if(mark<=79 && mark>=70){
        console.log('Grade:C');
    }
    else if(mark<=69 && mark>=60){
        console.log('Grade:D');
    }
   else if (mark<=59 && mark>=0)
    {
        console.log('Grade:F');
    }



     