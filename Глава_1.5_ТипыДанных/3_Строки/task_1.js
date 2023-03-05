// Задача 1

function ucFirst(str) {
    str = str[0].toUpperCase() + str.slice(1);

    return str;
}

console.log(ucFirst('test'));