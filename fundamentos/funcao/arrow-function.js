let dobro = function (a) {
     return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a; // return implicito

console.log(dobro(Math.PI));

let ola = function() {
    return 'olá, tudo bem?';
}

ola = () => 'olá, tudo ótimo!';
ola = _ => 'olá, meu consagrado!'; // possui um parametro


// this dentro da função arrow

function Pessoa() {
    this.idade = 0;

    setInterval (() =>  { // arrow function em Pessoa, quando executada, o this é o de Pessoa
        this.idade++;
        console.log(this.idade);
    }, 1000)
}

new Pessoa


// this e arrow function 2

let comparaComThis = function (param) {
    console.log(this === param);
}

comparaComThis(global);                         // true | global é do Node | se passar o this dá falso

const objeto = {}
comparaComThis = comparaComThis.bind(objeto);   // bind ligou o this de objeto
comparaComThis(global)                          // false
comparaComThis(objeto)                          // true

// arrow function
let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);                    // false | this refere-se à arrow-function
comparaComThisArrow(module.exports);            // true | o this de arrow aponta para module.exports
comparaComThisArrow(this);                      // true

comparaComThisArrow = comparaComThisArrow.bind(objeto);
comparaComThisArrow(objeto);                    // false | arrow function sempre fixa no contexto, nesse caso o module.exports
comparaComThisArrow(module.exports);            // true | arrow continua apontando para module.exports
