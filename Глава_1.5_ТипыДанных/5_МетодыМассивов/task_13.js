// Задача 13

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr) {

    const result = {};

    arr.forEach(el => {
        result[el.id] = { id: el.id, name: el.name, age: el.age };
    });

    return result;
}
  
let usersById = groupById(users);

console.log(usersById);