// Задача 7

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = [];
users.filter(el => names.push(el.name));

console.log( names ); // Вася, Петя, Маша