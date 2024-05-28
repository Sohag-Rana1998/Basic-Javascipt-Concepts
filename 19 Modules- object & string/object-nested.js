let college = {
    name: 'vqn',
    class:[10,11,12],
    events: ['science fair', '26 march', '16 Dec', '21 Feb'],
    unique: {
        color: 'blue',
        result:{
            GPA: 5,
            merit: 'top'
        }
    }

    
}

console.log(college);// output: {
//     name: 'vqn',
//     class: [ 10, 11, 12 ],
//     events: [ 'science fair', '26 march', '16 Dec', '21 Feb' ],
//     unique: { color: 'blue' },
//     result: { GPA: 5, merit: 'top' }
//   }

console.log(college.unique.color);// OUTPUT:blue
console.log(college.unique.result.GPA);// OUTPUT: 5.

// Change of value:
college.unique.result.GPA= 4.5;

console.log(college.unique.result.GPA);// OUTPUT: 4.5

college.class.push('HONOURS', 'MA');
console.log(college.class);// output:[ 10, 11, 12, 'HONOURS', 'MA' ]

college.class[2]=15;
console.log(college.class); //output:[ 10, 11, 15, 'HONOURS', 'MA' ]


//-----------> Delete property

delete college.unique.color;
console.log(college);// output:[ 'brand', 'procesore', 'price', 'storage', 'ram' ]
//[ 'Dell', 'intel', 60000, '512gb', '8gb' ]