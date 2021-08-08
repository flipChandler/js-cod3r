const soma = function (x, y) {          // soma recebe funcao anonima
    return x + y;
}

const imprimirResultado = function (a, b, operacao = soma) {   // imprimirResultado recebe funcao anonima com parametros e outra funcao
    console.log(operacao(a, b));                               // imprime a funcao
}

imprimirResultado(5, 9); // 14                                       // como não passou o 3º parametro | ficou a e b

imprimirResultado(3, 4, soma); // 7

imprimirResultado(3, 8, function (x, y) {
    return x - y;                           // -5
});

imprimirResultado(3, 4, (x, y) => x * y);   // 12

const pessoa = {
    falar() {
        console.log('opa');
    }
}

pessoa.falar();

