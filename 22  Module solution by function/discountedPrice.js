
function discountedPrice(quantity) {
  const first100Price = 100;
  const above100Price = 90;
  const above200Price = 70;
  if (quantity <= 100) {
    const total = first100Price * quantity;
    return total;
    
  }
  else if (quantity <= 200) {
    const total = above100Price * quantity;
    return total;
  }
  else  {
    const total = above200Price * quantity;
    return total;
  }
}

const discounted = discountedPrice(201);
console.log(discounted);