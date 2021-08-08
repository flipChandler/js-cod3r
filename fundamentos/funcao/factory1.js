// factory simples
function criarPessoa() {
    return {
        nome: 'Selma',
        sobrenome: 'Virginia'
    }
}

console.log(criarPessoa());

function criarProduto(nome, preco, desconto = 2)  {
    return { 
            nome,
            preco,
            desconto
         };
}

function criarProduto2(nome, preco)  {
    return { 
            nome,
            preco,
            desconto: 0.1
         };
}

console.log(criarProduto('Video Cassete', 150));