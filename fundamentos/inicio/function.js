// FUNCTION #1
function imprimirSoma(a, b) {
    console.log(a + (b || 0)) ;
}

imprimirSoma(4, 9); // 13
imprimirSoma(2); // 2
imprimirSoma(2, 5, 8, 9, 16, 99); // 7

function soma(a, b = 0) { // se não passar nada em b, o padrão é 0
    return a + b;
}

console.log(soma(5, 7)); // 12
console.log(soma(8)); // 8


// FUNCTION #2
const printSub = function (a, b) {
    console.log( a- b);
}

const printSoma = (a, b) => {
    return a + b;
}

// retorno implicito
const printMult = (a, b) => a * b;

printSub(30, 4); // 26
console.log(printSoma(34, 2)); // 36
console.log(printMult(3, 5)); // 15

// VAR #1

{
    {
        {
            {
                var sera = "Será";
            }
        }
    }
}

console.log(sera); // Será

function algo() {
    var foo = "teste"; // var dentro de função não é global
}

// console.log(foo); // error

var bar = 'outro teste'; // bar no browser pertence a window, podendo ser acessada através de window.bar

// VAR #2

var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero); // dentro = 2
}
console.log('fora = ', numero); // fora = 2

// LET #1

var num = 1;
{
    let num = 3;
    console.log('dentro =', num); // dentro = 3
}
console.log('fora =', num); // fora = 1


// VAR EM LOOP

const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(() => {
        console.log(i);
    });
}

funcs[2](); // 10
funcs[8](); // 10

// LET EM LOOP

const funcs2 = [];

for (let i = 0; i < 10; i++) {
    funcs2.push(() => {
        console.log(i);
    });
}

funcs2[2](); // 2
funcs2[8](); // 8

// HOISTING (IÇAMENTO) somente com VAR | não gera erro

console.log('a =', a); // a = undefined
var a = 5;
console.log('a =', a); // a = 5

// OBJETO VS FUNÇÃO

console.log(typeof Object); // function
console.log(typeof new Object); // object

const Cliente = function(){} 
console.log(typeof Cliente); // function
console.log(typeof new Cliente); // object 

class Produto {}
console.log(typeof Produto) // function
console.log(typeof new Produto()) // object


// OBJETOS SÃO GRUPOS ANINHADOS DE PARES CHAVE/VALOR

const cliente = {
    nome: 'Pedro',
    idade: 21,
    peso: 90,
    endereco: {
        logradouro: 'Rua dos Odes',
        numero: 12
    }
}

console.log(cliente);

// NOTACAO PONTO
console.log(Math.ceil(6.1)); // 7

function Obj(nome) {
    this.nome = nome;
}

const obj2 = new Obj('telefone');
console.log(obj2);

// DESTRUCTURING OBJECT

const pessoa = {
    nome: 'Ana',
    idade: 12,
    endereco: {
        rua: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa;
console.log(nome); // Ana

const { sobreNome, bemHumorada = true } = pessoa;
console.log(sobreNome, bemHumorada); // undefined true

const { endereco: { rua, numero: n } } = pessoa;
console.log(rua, n); // Rua ABC 1000


// DESTRUCTURING ARRAY

const [z] = [10];
console.log(z); // 10

const [n1, , n3, ,n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6); // 10 9 undefined 0


// DESTRUCTURING FUNCTION

function rand({ min = 0, max = 1000 }) { // valor padrão 0 e 1000
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand({ max: 50, min: 40 })); // gera valores entre 40 e 50


// DESTRUCTURING

function rand2([min = 0, max = 1000]) {
    if (min > max) {
        [min, max] = [max, min]; // DESTRUCTURING COM min recebendo max e max recebendo min
    }
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand2([50, 20]));
console.log(rand2([, 20]));
console.log(rand2([]));