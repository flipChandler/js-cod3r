const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i in nums) {
    if (i == 5) {
        break;
    }
    console.log(`${i} = ${nums[i]}`);
}

for (let i in nums) {
    if (i == 5) {
        continue;
    }
    console.log(`${i} = ${nums[i]}`);
}
console.log();

externo: for ( a in nums) {     // externo é um rotulo | break com rotulo não é recomendado
    for (b in nums) {
        if (a == 2 && b == 3) {
            break externo;      
        }
        console.log(`Par = ${a}, ${b}`);
    }
}