function tenTimes(num){

    const result = num*10;
    return result;
}

tenTimes(10);

const output = tenTimes(10);

console.log(output);



function money(tk,buyAmount){

    const cost = tk-buyAmount;
    return cost;
}

const returnMoney = money(500,165);

console.log(returnMoney);



function multipleReturn (num1, num2){
    const sum = num1 + num2;
    const diff= num1 - num2;
    const multiply = sum*diff;
    return result = multiply/2;
}


const Overall = multipleReturn(30,20);

console.log(Overall);


function shortcut(num1, num2){

    return num1 + num2;
}

const sum = shortcut(30,70);
console.log(sum);