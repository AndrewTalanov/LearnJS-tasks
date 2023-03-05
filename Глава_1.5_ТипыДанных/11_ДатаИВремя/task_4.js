// Задача 4

let date = new Date();

function getDateAgo(date, n) {
    
    const resultDay = new Date(date);

    resultDay.setDate(date.getDate() - n);
    
    return resultDay.getDate();
}

console.log( getDateAgo(date, 1) );
console.log( getDateAgo(date, 2) );
console.log( getDateAgo(date, 365) );