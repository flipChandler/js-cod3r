// funcao construtora
function Pessoa(nome) {
    this.nome = nome;

    this.falar =  function () {
        return `Meu nome é ${this.nome}`;
    }
}

const p1 = new Pessoa('João');

console.log(p1.falar()) ;


