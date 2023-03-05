// Задача 6

function randomInteger(min, max) {
    return Math.trunc(min + Math.random() * (max - min));
}

console.log(randomInteger(5, 10));