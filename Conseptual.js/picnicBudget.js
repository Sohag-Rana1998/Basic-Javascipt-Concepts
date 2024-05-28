function picnicBudget(quantity) {
  if (typeof quantity !== 'number' || quantity < 0) {
  
    return " Please provide a valid positive quantity"
}

  const first100Cost = 5000;
  const second100Cost = 4000;
  const above200Cost = 3000;

  let totalCost = 0;

  if (quantity <= 100) {
     totalCost = first100Cost * quantity;
    return totalCost;
  }
  else if (quantity<=200) {
    const first100totalCost = first100Cost * 100;
    const remainingQuantityCost = (quantity - 100) * 4000;
    totalCost = first100totalCost + remainingQuantityCost;

    return totalCost;
  }
  else{
    const first100totalCost1 = first100Cost * 100;
    const second100totalCost = second100Cost * 100;
    const remainingQuantityCost1 = (quantity - 200) * 3000;
    totalCost = first100totalCost1 + second100totalCost + remainingQuantityCost1;

    return totalCost;
  }

}

console.log(picnicBudget(201));