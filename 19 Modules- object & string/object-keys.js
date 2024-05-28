const computer ={
    brand: 'Dell',
    procesore: 'intel',
    price: 60000,
    storage: '512gb',
    ram: '8gb'

}

const keys = Object.keys(computer);
console.log(keys);// OUTPUT: [ 'brand', 'procesore', 'price', 'storage', 'ram' ]

const values = Object.values(computer);
console.log(values); //output:[ 'Dell', 'intel', 60000, '512gb', '8gb' ]