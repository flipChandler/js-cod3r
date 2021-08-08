console.log(soma(8,3)); // 11

// function declaration
function soma(x, y) {
    return x + y;
}

// function expression
const sub = function (x, y) {
    return x - y;
}

console.log(sub(9,3)); // 6

// named function expression
const mult = function mult (x, y) {
    return x * y;
}

console.log(mult(4,3)); // 12