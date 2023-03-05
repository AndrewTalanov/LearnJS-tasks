// Задача 11

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(arr) {

    let sum = 0;

    arr.forEach(el => {
        sum += el.age;
    });

    return sum / arr.length;
}

console.log( getAverageAge(arr) );