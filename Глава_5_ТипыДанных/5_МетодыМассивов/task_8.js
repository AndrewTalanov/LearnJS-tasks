// Задача 8

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map( (el, i) => {

    let fullName = `${el.name} ${el.surname}`;
    let id = i;

    return {
        id: id,
        fullName: fullName
    }
});

console.log(usersMapped);