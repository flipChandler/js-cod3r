// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0,0,0)); // 3 5 6 3

function soma2(a, b, c) {
    a = a !== undefined ? a : 1; // a <> de undefined, pega a, senao 1 | 0 in arguments ? a : 1
    b = 1 in arguments ? b : 1;  //  existe o indice 1 em arguments (2º), se sim b, senao 1
    c = isNaN(c) ? 1 : c;        // se a variavel c é NaN, retorne 1, senao pegue c | 2 in arguments ? c : 1
    return a + b + c;
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0,0,0)); // 3 5 6 0


// valor padr]ao do es2015
function soma3(a = 1, b = 1, c = 1) { // valor padrão de a, b e c é 1
    return a + b + c;
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0,0,0)); // 3 5 6 0