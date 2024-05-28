const school = 'RAJ UK Uttara Model School';

const book = 'chemistry'
const boi = 'Chemistry'

//-------> book != boi ....not equal. bcz case sensitivity.

// console.log(school.toLowerCase()); OUTPUT:raj uk uttara model school

//console.log(school.toUpperCase()); OUTPUT:RAJ UK UTTARA MODEL SCHOOL

if (book.toLowerCase()=== boi.toLowerCase()){
    console.log( 'I will reading more')
}
else{
    console.log('I will not read more')
}


const books = '  chemistry   '
const boii = 'chemistry    '

if(books.trim()=== boii.trim()){
    console.log('I will reading more')
}

else{

    console.log('I will not reading')
}