// Задача 8

function formatDate(date) {

    let diff = new Date() - date;
    let below10 = (n) => ((n < 10) ? '0' + n : n);
    let day = below10(date.getDate());
    let month = below10(date.getMonth()+1);
    let year = below10(date.getFullYear());
    let hour = below10(date.getHours());
    let min = below10(date.getMinutes());

    if (diff < 1000) {

        return "прямо сейчас";
    } else if (diff < 1000 * 60) {

        return `${diff / 1000} сек. назад`;
    } else if (diff < 1000 * 60 * 60) {

        return `${diff / (1000 * 60)} мин. назад`;
    } else {
        
        return `${day}.${month}.${year}, ${hour}:${min}`;
    }
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );