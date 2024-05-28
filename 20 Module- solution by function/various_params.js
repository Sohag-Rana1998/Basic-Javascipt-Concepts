function doDouble (num,doDouble){

    if(doDouble===true){
        return num*5;
    }

    else{
        return num*2;
    }
}

console.log(doDouble(5, true));
console.log(doDouble(5, false));




function numberOfElements(str){

    const size = str.length;

    return size;
}

console.log(numberOfElements('Bangladesh'));


function array (num){
    const elementOfArray= num.length;
    return elementOfArray;
}

console.log(array([10,20,30,40,60]));