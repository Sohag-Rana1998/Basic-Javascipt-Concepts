
const productNames = ["Laptop","Mobile","Tv" ,"Dextop","I Pad","Watch","Samsung","apple"]

// const laptop = productNames[0]
// const mobile = productNames[1]
// const tv = productNames[2]
// console.log(laptop);
// console.log(mobile);
// console.log(tv);

/**
 * For ------
 * For of
 */

// for (let i = 0; i < productNames.length; i++) {
//     const element = productNames[i];
//     console.log("from only for loop----",element); 
// }

const Person = {
    name : "Farhan Rahman",
    age : 26,
    hight : "5'7",
    address : {
        parmanent : "Rangpur",
        present : "Comilla",
    },
    race : "Ujjol Shamla",
    occupation : "Student"
}

// for (const element of productNames) {
//     console.log("from for of loop----",element); 
// }

const name = Person["name"]
const age = Person["age"]
// console.log(name);
// console.log(age);


for (const element in Person) {

    console.log(element , ":" , Person[element]); 

}








