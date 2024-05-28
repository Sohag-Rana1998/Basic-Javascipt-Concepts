/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var ticketFare = 800;
var age = 20;
var isStudent = true;


if(age <10){
    console.log('children ticket is free');
}

else if (age >=60){
    // 15% discount
    var discount = 800 * 15/100;
    var payAbleFare = ticketFare-discount;
    console.log(payAbleFare);
}

else if (isStudent===true){
    // 50% discount
    discount= 800*50/ 100;
    payAbleFare = ticketFare -discount;
    console.log(payAbleFare);
}

else{
    console.log(ticketFare);
}