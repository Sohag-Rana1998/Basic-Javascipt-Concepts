const numbers = [1,2,3,4,5,6,7];

// numbers.reverse();
// console.log(numbers);

let reversed =[]; output:[
  7, 6, 5, 4,
  3, 2, 1
]

for(let num of numbers){
    // console.log(reversed);
    reversed.unshift(num)
    console.log(reversed);
}