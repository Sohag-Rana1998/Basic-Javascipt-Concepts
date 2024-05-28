// const arr =[10, 20, '30', 40, '50', 60]

// let sum =0;

// for(let i=0; i< arr.length; i++){
//     const currentNumber= arr[i];
//     sum= sum + parseInt(currentNumber);
// }

// console.log(sum);

const arr =[10, 20, '30', 40, '50', 'price:60']

let sum =0;

for(let i=0; i< arr.length; i++){
    const currentNumber= arr[i];
    const convertedNumber= parseInt(currentNumber);
    if(!isNaN(convertedNumber)){
        sum= sum + parseInt(convertedNumber);
    }
   
}

console.log(sum);