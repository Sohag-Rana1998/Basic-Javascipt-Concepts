// ### Task-3:
// Your task is to calculate the `total budget` required to buy electronics:

//         laptop = 35000 tk
//         tablet = 15000 tk
//         mobile = 20000 tk

// Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.

// ---


function calculateElectronicsBudget(laptop, tablet, mobile) {
  if (typeof laptop !== 'number' || typeof tablet !== 'number' || typeof mobile !== 'number') {
  
    return 'Please provide a valid quantity'
  }
  
  else if (laptop < 0 || tablet < 0 || mobile < 0) {
    return "Please provide a positive quantity"
  }

  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;
  

  const laptopQ = laptop || 0;
  const tabletQ = tablet || 0;
  const mobileQ = mobile || 0;

  const totalPrice = (laptopPrice * laptopQ) + (tabletPrice * tabletQ) + (mobilePrice * mobileQ);

  return `total money required ${totalPrice}`;

}


console.log(calculateElectronicsBudget(1, 0, 0));