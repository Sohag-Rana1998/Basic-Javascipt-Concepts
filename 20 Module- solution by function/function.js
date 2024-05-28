function square(number){

    const result = number*number;

    console.log(result);
}


square(5);
square(25);



function addnumber(num1, num2, num3, num4, num5,){

    const total = num1+ num2+ num3+ num4+ num5;
    console.log(total);

}


addnumber(10,20,30,40,50);


function OddNumber(num1, num2, num3, num4, num5){

    const result = num1-num2-num3-num4-num5;

    console.log(result);
}


OddNumber(10000,33,22,55,66,);



//------------argument come from variable----------------//

const myage =26;
const fatherAge=52;

function difference (num1, num2){

  const diff = num1-num2;
  console.log(diff);
}

difference(fatherAge, myage);