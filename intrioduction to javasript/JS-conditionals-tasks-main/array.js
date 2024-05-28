// const friends = ['sadik', 'sahel', 'showrab', 'muhin', 'mujazid'];
// const friends1 = ['abul', 'babul', 'cabul', 'dablu']
//------>>>>>>>>>>>   index of array count start from 0 then 1,2,3...


//------>>>>>>>>>>>   This is the rules for adding or removing array item: 

// friends.push('aminur', 'sohel')
// friends.pop()
// friends.pop()
// friends.unshift(' sadik')
// friends.shift('showrab', 'muhin', 'aminur', 'sohel')
// console.log(friends);


//------>>>>>>>>>>>   is the item is a array item for check:

// console.log(friends.includes('sohel'));
// console.log(friends.includes('sahel'));

// Result: true or false

// ------>>>>>>>>>>>   arrays condition is the include true then it or else

// if (friends.includes('sahel')){
//     console.log('lets go for a lunch');
// }

// else{
//     console.log('dont go for lunch');
// }

// Result: lets go for a lunch  bcz sahel is array item.

// ------>>>>>>>>>>>  how much number contains in array for check:

// console.log(friends.length);
// result: 5
// 
// ------>>>>>>>>>>>   is this is a array variable name for check:

// console.log(Array.isArray(friends));

// console.log(friends.join('+'));

// Output: sadik+sahel+showrab+muhin+mujazid

// console.log(friends.join('|'));

// Output: sadik|sahel|showrab|muhin|mujazid

// const friends = ['sadik', 'sahel', 'showrab', 'muhin', 'mujazid'];
// const friends1 = ['abul', 'babul', 'cabul', 'dablu'];

// console.log(friends.concat(friends1));

// Output:: 'sadik',   'sahel',
// 'showrab', 'muhin',
// 'mujazid', 'abul',
// 'babul',   'cabul',
// 'dablu'


// console.log(friends.slice(2,5));

// Output:; [ 'showrab', 'muhin', 'mujazid' ]

const friends = ['sadik', 'sahel', 'showrab', 'muhin', 'mujazid'];
const friends1 = ['abul', 'babul', 'cabul', 'dablu'];

// removing elements from 3 to two elements will remove
// console.log(friends.splice(3,2));
// Output::[ 'muhin', 'mujazid' ]

