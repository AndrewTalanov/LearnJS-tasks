// Задача 1

let user = {
    name: "Василий Иванович",
    age: 35
};

console.log(user);

let userJSON = JSON.parse(JSON.stringify(user));

console.log(userJSON);