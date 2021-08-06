// for
let contador = 1;
while(contador < 11) {
    console.log(contador);
    contador++;
}

for (let i = 1; i < 11; i++) {
    console.log(i);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for (let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`);
}


// for in ... o i traz o ínidice do array ... 0, 1, 2, 3, 4
for (let i in notas) {
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}


