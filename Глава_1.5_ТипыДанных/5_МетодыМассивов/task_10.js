// Задача 10

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(arr) {
    return arr.sort(() => Math.random() < .5 ? 1 : -1);
}

console.log(shuffle(arr));