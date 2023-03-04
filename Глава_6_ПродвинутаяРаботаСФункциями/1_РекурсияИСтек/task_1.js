// Задача 1

// Вариант 1
function sumTo(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}

// Вариант 2
function sumTo(number) {
    return number > 1 ? number + sumTo(number - 1) : number;
}

// Вариант 3
function sumTo(number) {
    return ((1 + number) / 2) * number;
}

console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(100));