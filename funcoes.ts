function adiciona(a:number, b:number):number{
    return a+b
}
console.log(adiciona(1,1));

// arrow function add
const add = (a:number, b:number):number => a+b;
console.log(add(1,1));

// parametros opcionais
const apDesconto = (a:number, b:number, tx?:number):number => {
    if(typeof tx != 'undefined')
        return (a+b)-tx
    return (a+b)
}
console.log(apDesconto(1,3,2));
console.log(apDesconto(1,3));

// parametros com default
const aplicarDesconto = (preco:number, porcentagem:number=25):number => {
    return preco - (preco * (porcentagem/100))
}

console.log(aplicarDesconto(100,10));
console.log(aplicarDesconto(100));


// rest params
const calcTotal = (...numeros:number[]): number => {
    let total = 0;
    // numeros.forEach(num =>{
    //     return total+=num;
    // })
    numeros.forEach(num => total+=num)
    return total
}

console.log(calcTotal(1,2,3,4,5))