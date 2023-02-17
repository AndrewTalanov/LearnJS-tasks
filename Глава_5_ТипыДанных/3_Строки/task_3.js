// Задача 3

function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength) + '...' : str;
}

console.log(truncate('Такая вот строка', 3)); // Так...