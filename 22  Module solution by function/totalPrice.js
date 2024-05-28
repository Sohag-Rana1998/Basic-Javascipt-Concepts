
function totalPrice
  (shirtQuantity, pentQuantity, shoeQuantity) {
  
  const shirtPrice = 450;
  const pentPrice = 600;
  const shoePrice = 1200;

  const totalShirtPrice = shirtPrice * shirtQuantity;
  const totalPentPrice = pentPrice * pentQuantity;
  const totalShoePrice = shoePrice * shoeQuantity;


  const totalPrice = totalShirtPrice + totalPentPrice + totalShoePrice;

  return totalPrice;
}

const totalPrice1 = totalPrice(2, 2, 1);

console.log(totalPrice1); //output:3300;
