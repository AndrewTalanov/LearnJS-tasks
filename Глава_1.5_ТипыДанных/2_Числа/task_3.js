// Задача 3

let number;

function readNumber() {

    number = prompt('number! :');

    if (isNaN(number)) {
        readNumber();
    } else if (number == '' || number == undefined) {
        return null;
    } else if (typeof +number == 'number') {
        return number;        
    } else {
        readNumber();
    }
}

readNumber();

alert(number);