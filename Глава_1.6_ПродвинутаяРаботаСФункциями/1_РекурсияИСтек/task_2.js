// Задача 2

function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : n; 
}

console.log(factorial(3));