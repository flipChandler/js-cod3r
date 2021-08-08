/* arguments é o array interno que tem em uma funcao e serve quando passa 
 um parametro numa funcao que não tem parametro */
function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma()); // 0
console.log(soma(1)); // 1
console.log(soma(1.1, 2.2, 3.3)); // 6.6

console.log(soma(1.1, 2.2, "Teste")); // 3.3000000000000003Teste
console.log(soma('b', 'c', 'e')); // 0bce
