function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20;
global.des = 0.1;

console.log(getPreco())                     // R$ NaN
console.log(produto.getPreco());            // R$ 3900.65


const carro = { preco: 49990, desc: 0.2 }
console.log(getPreco.call(carro));          // R$ 39992
console.log(getPreco.apply(carro));          // R$ 39992

console.log(getPreco.call(carro, 0.17, '$')); // R$ 46790.64 contexto, imposto e moeda
console.log(getPreco.apply(carro, [0.17, '$'])); // R$ 46790.64 contexto, apply tem que passar dentro de um array
