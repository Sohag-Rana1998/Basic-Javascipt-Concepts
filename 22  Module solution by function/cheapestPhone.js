const mobiles =
  [{ name: 'samsung', price: '20000', camera: '12mp' },
    { name: 'xioami', price: '180000', camera: '12mp' },
    { name: 'asus', price: '22000', camera: '12mp' },
  { name: 'walton', price: '12000', camera: '12mp' },
    { name: 'vivo', price: '22000', camera: '12mp' }];
  

function cheapestPhone(phones) {
  let cheapPhone = phones[0];
  for (const phone of phones) {
    
    if (phone.price < cheapPhone.price) {

      cheapPhone = phone;

    }
  }
  return cheapPhone;
}
    
const cheapest = cheapestPhone(mobiles);
console.log(cheapest);