// funcao em js é first-class object (citizen)
// higher-order function

// funcao forma literal
function funcao() {

}

// armazenar em uma variavel
const funcao2 = function() {

}


// armazenar em um array
const array = [
    function (a, b) { 
        return a + b
    }, 
    funcao,
    funcao2
];
console.log(array[0](2,3)); // 5 | chamou a primeira funcao dentro do array


// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'E aí, beleza?!'};
console.log(obj.falar());


// passar funcao como parametro
function run (funcao2) {
    funcao2();
}

run(function () { console.log('Executando...')} ); // passou uma funcao como parametro em funcao2


// uma funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

// chamada da funcao
soma(2, 3)(4); // 9

// ou
const cincoMais = soma(2,3);
cincoMais(4); //9

