function layeredDiscount(quantity) {
  const first100Price = 100;
  const second100Price = 90;
  const above200Price = 70;

  if (quantity <= 100) {
    const total = first100Price * quantity;
    return total;
  }
  else if (quantity <=200 ) {
   const first100PriceTotal = first100Price * 100;
    const remainingQuantity = quantity - 100;
    const remainingQuantityPrice = remainingQuantity * second100Price;

    const total = first100PriceTotal + remainingQuantityPrice;
    return total;
  }
  else  {
    const first100PriceTotal = first100Price * 100;
    const second100PriceTotal = second100Price * 100;
    const remainingQuantity = quantity - 200;
    const remainingQuantityPrice =remainingQuantity * above200Price;
    const total = first100PriceTotal + second100PriceTotal + remainingQuantityPrice;
    return total;
  }
}

const layeredDiscountPrice = layeredDiscount(205);
console.log(layeredDiscountPrice);