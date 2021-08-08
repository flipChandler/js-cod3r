const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//sem callback
let notasBaixas = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i]);
    }
}

console.log(notasBaixas);

// com callback | quando acontecer o evento de filtrar, chame essa função
notasBaixas = notas.filter(function (nota) { // filter recebe uma callback function para retornar notas abaxio de 7, onde 
    return nota < 7;                         // notasBaixas recebe esse retorno
});

console.log(notasBaixas);


// com arrow function
notasBaixas = notas.filter(nota => nota < 7);
console.log(notasBaixas);
