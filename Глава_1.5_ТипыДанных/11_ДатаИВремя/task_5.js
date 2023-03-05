// Задача 5

function getLastDayOfMonth(year, month) {

    for (let i = 27; i < 33; i++) {
        
        let days = new Date(year, month, i).getDate();

        if (days == 1) {

            return new Date(year, month, i - 1).getDate();
        }
    }
}

console.log( getLastDayOfMonth(2023, 2) );