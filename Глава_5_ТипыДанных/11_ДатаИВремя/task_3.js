// Задача 3

const date = new Date(2023, 1, 19);  // 19 февраля 2023 года

function getLocalDay(date) {

    return date.getDay() == 0 ? 7 : date.getDay();
}

console.log( getLocalDay(date) ); // воскресенье 7