function pandaCost(singara, samucha, jilapi) {

  if (typeof singara !== 'number' || typeof samucha !== 'number' || typeof jilapi !== 'number')
  {
    return "Please provide a valid quantity";
  }
  else if (singara < 0 || samucha < 0 || jilapi < 0) {
    return " The quantity should be a positive number"
  }

  const singaraPrice = 10;
  const samuchaPrice = 15;
  const jilapiPrice = 7;

  const singaraQuantity = singara || 0;
  const samuchaQuantity = samucha || 0;
  const jilapiQuantity = jilapi || 0;

  const totalCost = (singaraPrice * singaraQuantity) + (samuchaPrice * samuchaQuantity) + (jilapiPrice * jilapiQuantity);

  return totalCost;
}

const total = pandaCost(2,0,1);

console.log(total);