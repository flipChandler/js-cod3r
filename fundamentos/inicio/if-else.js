function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log(`Aprovado com ${nota}`);
    }
}

soBoaNoticia(9);
soBoaNoticia(6.9);

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log(`É verdade... ${valor}`);
    }
}

seForVerdadeEuFalo();           // falso  
seForVerdadeEuFalo(null);       // falso
seForVerdadeEuFalo(undefined);  // falso
seForVerdadeEuFalo(NaN);        // falso
seForVerdadeEuFalo('');         // falso
seForVerdadeEuFalo(0);          // falso
seForVerdadeEuFalo(-1);         // verdadeiro
seForVerdadeEuFalo(' ');        // verdadeiro
seForVerdadeEuFalo('?');        // verdadeiro
seForVerdadeEuFalo([]);        // verdadeiro
seForVerdadeEuFalo([1, 2]);        // verdadeiro
seForVerdadeEuFalo({});        // verdadeiro


// #if-else
const imprimirResultado = (nota) => {
    if (nota >= 7) {
        console.log('Aprovado!');
    } else {
        console.log('Reprovado!');
    }
}

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Epa!'); // Reprovado!


// #if-else-if

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
}

const imprimirResultado2 = (nota) => {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra!');
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado!');
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação!');
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado!');
    } else {
        console.log('Nota inválida!');
    }
}

imprimirResultado2(10);
imprimirResultado2(8);
imprimirResultado2(4);
imprimirResultado2(-1);
imprimirResultado2(11);



