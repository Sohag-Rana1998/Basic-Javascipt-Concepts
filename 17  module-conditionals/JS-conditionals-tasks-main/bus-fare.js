/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/



let ticketFare = 800;
const age = 19;
const isStudent = true;

if( age< 10){
    ticketFare= 0;
    console.log(ticketFare);
}

else if (age >=60){
    ticketFare= ticketFare - (ticketFare*15/100);
    console.log(ticketFare);
}

else if(isStudent===true){
    ticketFare= ticketFare - (ticketFare*50/100);
    console.log(ticketFare);
}

else{
    console.log(ticketFare);
}