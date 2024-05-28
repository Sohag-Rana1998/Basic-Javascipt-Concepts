const products = [
  { name: 'shirt', price: 500, quantity: 2 },
  { name: 'pant', price: 1200, quantity: 2 },
  { name: 'shoe', price: 1500, quantity: 1 },
  { name: 'belt', price: 800, quantity: 1 }]

function totalShopping(products) {
  let total = 0;

  for (const product of products) {
    
    const totalProductPrice = product.price * product.quantity;

    total = total + totalProductPrice;
  }
  return total;
}
  
const totalPrice = totalShopping(products);
console.log(totalPrice);