// const fruits = ['Apple', 'Banana', 'Cake', 'Egg', 'fish'];

// console.log(fruits[3]);

// fruits[2]= 'Jumbura';
// //console.log(fruits);


// const touristPlace = ['Tetulia', 'Dinajpur', 'Kuakata'];

// touristPlace.push('cox-bazar');



// touristPlace.push('Shazek', 'Saint Martin');

// console.log(touristPlace);
// touristPlace.pop();

// console.log(touristPlace);

// console.log(touristPlace.includes('Shazek'));
// console.log(touristPlace.includes('Tetulia'));



// const books =['educaion book', 'islamic book', 'history book']

// console.log(books.includes('java script book'));


// const name = 'sohag';
//  let isMale = true;
// //const foods =['beef', 'mutton', 'Fish', 'Egg'];


// console.log(Array.isArray(foods));
// console.log(Array.isArray(name));


// let newArray= books.concat(foods);
// console.log(foods);
// console.log(books);

// console.log(newArray);



// const foods =['beef', 'mutton', 'Fish', 'Egg'];

// for (let i = 0; i < foods.length; i++) {
//     const elements = foods[i];
//  console.log(elements);
    
// }

// for (const foodName of foods) {
//     console.log(foodName);
// }



const myself = {
  name: 'Sohag',
  fatherName: 'Hasem ali',
  motherName: 'Anowara begum',
  village: 'Hakimpur',
  PO: 'Tirnoyhat'

}



for (const property in myself) {
  
    //console.log(property);
    //console.log(property +':'+ myself[property]);
}


const foods =['beef', 'mutton', 'Fish', 'Egg'];

for ( let i = 0; i < foods.length; i++){

  //const elements = foods[i];

 // console.log(elements);
}

for ( let elements of foods ){
  console.log(elements)
}


