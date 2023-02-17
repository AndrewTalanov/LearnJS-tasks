// Задача 2

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    return arr.filter(el => ( el >= a && el <= b ) ? true : false);
}

let result = filterRange(arr, 1, 4);

console.log(result);