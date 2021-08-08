const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar(); // bom dia!

const speak = pessoa.falar;
speak(); // undefined | conflito entre OO e funcional

const falarDePessoa = pessoa.falar.bind(pessoa); // o bind passa o obj que vai resolver o problema do this na variavel
falarDePessoa(); // pq o this é pessoa | o bind traz a função de pessoa | bind = ligar


// this - bind 2

function Pessoa() {
    this.idade = 0;

    setInterval (() =>  {
        this.idade++;
        console.log(this.idade);
    }, 1000)
}

new Pessoa


function Pessoa2() {
    this.idade = 0;

    const self = this;
    setInterval (function() {
        self.idade++;
        console.log(self.idade);
    }, 1000)
}

new Pessoa2

// 2 formas de resolver o problema do this... usando arrow function, ou usando a const que recebeu this
// o this sempre está associado a arrow function
