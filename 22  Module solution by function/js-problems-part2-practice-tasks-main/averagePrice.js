// .### Task-4: 

// You are `given an array of phone objects`, each containing information about the `model, brand, and price`. Your task is to write a JavaScript function named `findAveragePhonePrice` that takes this `array as input` and returns the `average price of phone`.


// **Input**

// <br>

//         const phones = [
//             { model: "PhoneA", brand: "Iphone", price: 95000 },
//             { model: "PhoneB", brand: "Samsung", price: 40000 },
//             { model: "PhoneC", brand: "Oppo", price: 26000 },
//             { model: "PhoneD", brand: "Nokia", price: 35000 },
//             { model: "PhoneE", brand: "Iphone", price: 105000 },
//             { model: "PhoneF", brand: "HTC", price: 48000 },
//         ];

// ---


function findAveragePhonePrice(phones) {
// const totalPrice= phones[0].price + phones[1].price + phones[2].price +phones[3].price + phones[4].price + phones[5].price

//   const averagePrice = totalPrice / phones.length;

  //   return averagePrice.toFixed(2);
  
  //or
  
  let totalPrice = 0;

  for (const phone of phones) {
    
    totalPrice = totalPrice + phone.price;
  }
   const averagePrice = totalPrice / phones.length;
  return averagePrice.toFixed(2);
}

const phones = [
            { model: "PhoneA", brand: "Iphone", price: 95000 },
            { model: "PhoneB", brand: "Samsung", price: 40000 },
            { model: "PhoneC", brand: "Oppo", price: 26000 },
            { model: "PhoneD", brand: "Nokia", price: 35000 },
            { model: "PhoneE", brand: "Iphone", price: 105000 },
            { model: "PhoneF", brand: "HTC", price: 48000 },
            { model: "PhoneF", brand: "HTC", price: 48000 },
            { model: "PhoneF", brand: "HTC", price: 48000 },
];
        
const result = findAveragePhonePrice(phones);

console.log(result);