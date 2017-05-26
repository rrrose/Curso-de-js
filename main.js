// console.log('Olá mundo! Este é um arquivo importado')

/*
var number = 0;

while (number < 10) {
    console.log(number);
    number++;
}

var prop = prompt('Qual é o seu nome?')

function SeuNome(name) {
    return name;  
}

console.log(SeuNome(prop))

//MODELANDO UM OBJETO

var prop1 = prompt('Modelo');
var prop2 = prompt('Nome');
var prop3 = prompt('Cor');

var obj = {
    modelo: prop1,
    nome: prop2,
    cor: prop3
};

console.log(obj);
*/

// ARRAYS

var coisas = [
    'celular',
    'livro'    
];

//adiciona elementos no fim do array
coisas.push('óculos');
console.log(coisas);

//adiciona elementos no início do array
coisas.unshift('fones de ouvido');
console.log(coisas);

//elimina o último elemento do array
coisas.pop();
console.log(coisas);

//remover primeiro elemento do array
coisas.shift();
console.log(coisas);

//remover elementos do array
coisas.splice('2');
console.log(coisas);

//acessar um item
console.log(coisas[1]);

//mostrar o índex
console.log(coisas.indexOf('livro'));

//concatenar
var oculos = [
    'óculos de sol'
];

console.log(oculos);

var resultado = coisas.concat(oculos);
console.log(resultado);
