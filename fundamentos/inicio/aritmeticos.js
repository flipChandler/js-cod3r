const [a, b, c, d] = [3, 5, 1, 15];

const soma = a + b + c + d;
const subtracao = d - b;
const multiplicacao = a * b;
const divisao = d / a;
const modulo = a % 2;

console.log(soma, subtracao, multiplicacao, -divisao, modulo); // converteu o resultado para negativo de divisao

// RELACIONAIS

console.log('01)', '1' == 1); // true , 1 string e outro number
console.log('02)', '1' === 1); // false
console.log('03)', '3' != 3); // false
console.log('04)', '3' !== 3); // true

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0); // 01/01/1970
const d2 = new Date(0); // 01/01/1970

console.log('09)', d1 == d2);
console.log('10)', d1 === d2); // ref de memorias diferentes
console.log('11)', d1.getTime() === d2.getTime());

console.log('12)', undefined == null); // true
console.log('13)', undefined === null); // false

// OPERADORES LOGICOS

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) -- bitwise xor
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

console.log('1)', compras(true, true));
console.log('2)',compras(true, false));
console.log('3)',compras(false, true));
console.log('4)', compras(false, false));

// UNARIOS

let num1 = 1;
let num2 = 2;

num1++;
console.log(num1);

--num1;
console.log(num1);

console.log(++num1 === num2--); // true
console.log(num1 === num2); // false

// TERNARIO

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(8.6));

nota = 6;
const status = nota >= 7 ? 'Aprovado' : 'Reprovado';
console.log(status);

// BROWSER X NODE

let h = 3;
global.b = 123;
this.c = 456; // module.exports.c

console.log(h);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this); // true | em Node, cada arquivo é um module

// TRY-CATCH

const obj = {
    nome: 'FABIOOOLAAA'
}

function tratarErroELancar() {
    //throw new Error('...');
    // throw 10
    // throw true
    //throw 'mensagem';
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function ImprimirNomeGritado(obj) {
    try {
        console.log(obj.nome.toUpperCase() + "!!!!");
    } catch (error) {
        tratarErroELancar(error);
    } finally {
        console.log('final');
    }
}

ImprimirNomeGritado(obj);
