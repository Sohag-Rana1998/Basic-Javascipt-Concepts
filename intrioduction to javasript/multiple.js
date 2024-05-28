const price = 2500 ;

if( price >= 5000 ){
    // 10% discount
   const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log (payAmount);
}
else if(price > 3000){
    // 5%  discount
    discount = price * 5 / 100;
    payAmount = price - discount;
    console.log(payAmount);
}

else if(price > 2000){
    console.log('Delivery is free')
}
else{console.log(price);}

