// Задача 6

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field) {
    return function(el1, el2) {
        return el1[field] > el2[field] ? 1 : -1;
    }
}

console.log( users.sort(byField('name')) );
console.log( users.sort(byField('age')) );