// Задача 3

function fib(n) {
    return Math.round( ((( (1 + 5 ** (1/2)) / 2 ) ** n) - (( (1 - 5 ** (1/2)) / 2 ) ** n)) / 5 ** (1/2) );
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757 