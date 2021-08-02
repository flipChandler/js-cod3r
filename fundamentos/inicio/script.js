console.log('Hello World');

for (let i = 1; i < 10; i += 2) {   
    console.log(i);
}

for (let j = 2; j < 11; j += 2) {
    console.log(`\n${j}`);
}
let verdadeiro = true;

console.log(typeof verdadeiro);

// TIPOS
// NUMBER -> funcao e number -> tipo
const peso = 1.0;
console.log(Number.isInteger(peso)); // true

const peso2 = 2.0;
console.log(Number.isInteger(peso2)); // false

const avalicao1 = 9.871;
const avalicao2 = 6.871;

const total = avalicao1 * peso + avalicao2 * peso2;
const media = total / (peso + peso2);

console.log(media.toFixed(2)); // 7.87 | 2 casas decimais
console.log(media.toString(2)); // gerou um numero binario
console.log(typeof media);

console.log(7 / 0); // infinity
console.log('10' / 2); // 5
console.log('Show' * 2); // NaN
console.log(0.1 + 0.7) // 0.7999999999 | especificação que torna o JS mais rápido por não ser tão precisa

// MATH -> object
const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);
console.log(area);

// STRING
const aluno = 'Felipe';
console.log(aluno.charAt(4)); // p
console.log(aluno.charCodeAt(3)); // i na ASCI é 105
console.log(aluno.indexOf('l')); // l está na posição 2
console.log(aluno.substring(3));// print a partir da posição 3 | ipe
console.log(aluno.substring(0, 3)); // print do 0 e me dê 3 caracteres | fel
console.log(aluno.concat(' dos Santos').concat(` tem ${media}`));
console.log(aluno.replace(/\w/g, '4')); // substitua tudo por 4 | 444444
console.log('Brad, Julia, Tom, Cabral, Josiani, Priscila'.split(',')); // vai gerar um array de 6 posições | pode aplicar regex tmb

// TEMPLATE STRING
const nome = 'Felipe';
const concatenacao = `Ola, ${nome}`;
console.log(concatenacao);
console.log(`1 + 1 = ${1 + 1}`); // 1 + 1 = 2

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado, cuzeiro')}!`); // Ei... CUIDADO, CUZEIRO!

// BOOLEAN
let isAtivo = false;
console.log(isAtivo); // false

isAtivo = true;
console.log(isAtivo); // true

isAtivo = 1; // 1 verdadeiro e 0 falso
console.log(!!isAtivo); // true | dupla negação volta ao primeiro sentido (condição)
// !!false é false... !!true é true

// TUDO O QUE É VERDADEIRO
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));


// TUDO O QUE É FALSO
console.log(!!0)
console.log(!!''); // STRING VAZIA
console.log(!!null);
console.log(!!undefined);
console.log(!!(isAtivo = false))


console.log(!!('' || null || 0 || ' ')); // true | espaco

const nome2 = '';
console.log(nome2 || 'Desconhecido'); // pra setar um valor padrão, se nome = false, print Descohecido

// ARRAY
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[2]);
valores.push(7.3);
console.log(valores[4]);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

valores.pop();
console.log(valores);

delete valores[3];
console.log(valores);

console.log(typeof valores); // object

// OBJECT
const prod1 = {}; // CRIACAO DE UM OBJETO VAZIO | UMA COLEÇÃO DE CHAVE E VALOR
prod1.nome = 'Celular Ultra Mega'; // ADD UM ATRIBUTO DINAMICAMENTE
prod1.preco = 5852.56;
prod1.quantidade = 32;
prod1.marca = 'Samsung';
prod1['desconto'] = 1000.0;
console.log(prod1);

// OUTRA FORMA DE CRIAR OBJETO
const prod2 = {
    nome: 'Camisa Polo',
    preco: 80.90,
    marca: 'Ralph Lauren'
}

console.log(prod2);

// NULL E UNDEFINED  

// atribuicao por referência (objeto)
const a = { nome: 'Felipe'};
const b = a;
b.nome = 'Priscila'

console.log(a); // Priscila
console.log(b); // Priscila

// atribuição por valor (tipo primitivo)
let c = 10;
let d = c;
d = 40;

console.log(c, d); // 10 40

let value;
console.log(value); // undefined | não existe | não inicializada

value = null; // ausência de valor

const produto = {};
console.log(`-> ${produto.nome}`); // undefined
console.log(produto); // {}

produto.nome = 'Geladeira';
console.log(produto);

delete produto.nome;
console.log(produto); // {}

console.log(typeof Object); // function

class Produto {}

console.log(typeof Produto); // function

