const person ={
    Name:'sohag',
    AGE: 26,
    Profesion: 'devloper',
    isMarried: true,
    salary: 25000,
}

console.log(person.Name);
console.log(person.salary);

console.log(person['AGE']);
console.log(person['salary']);

const dataOf = person['Name'];
console.log(dataOf);


