function evenNumberOnly (numbers){

let evens = [];
for (const number of numbers) {

    if(number%2===0){
        evens.push(number)
    }
}
return evens;

}

const num =[32,42,545,76,55,44,33];

const evens = evenNumberOnly(num);

console.log(evens);











function OddNumberOnly(numbers){

let Odds =[];
for (const number of numbers) {
    if(number%2===1){

      Odds.push(number);
    }  
}
return Odds;
}

const nums = [32,42,545,76,55,44,33];

const Odds = OddNumberOnly(nums);

console.log(Odds);





//Sum of numbers:

function sumOfEvenNumbers(numbers){
let sum= 0;

for(const number of numbers){

    if(number%2===0){
        sum= sum + number;
    }
    
}

return sum;
}


const arrays =[11,22,33,22,55];

const sum =sumOfEvenNumbers(arrays);

console.log(sum);