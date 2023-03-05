// Задача 3

let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    arr.forEach( (el, id) =>  (el >= a && el <= b) ? '' : arr.splice(id, 1) );
}

filterRangeInPlace(arr, 1, 4);

console.log(arr);