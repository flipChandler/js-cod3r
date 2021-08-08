const valor = 'Global';

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local';
    minhaFuncao(); // essa function irá procurar 'valor' dentro do local onde ela foi definida e não onde foi chamada
}

exec(); // Global