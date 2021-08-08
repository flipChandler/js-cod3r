// callback = chamar de volta | Observer | uma function callback outra function quando a primeira for chamada
const fabricantes = ["Mercedes", "Audi", "BMW", "Mitsubish", "Subaru", "Honda", "Hyundai", "Nissan"];

function imprimir(nome, indice) { // na funcao, entende-se que o 1º param é nome e o 2º param é o seu indice
    console.log(`${indice + 1}. ${nome}`); 
}

// para cada elemento, foreach vai chamar (callback) a função imprimir
fabricantes.forEach(imprimir); // depois inverte para printar 1. Mercedes

fabricantes.forEach(fabricante => console.log(fabricante));