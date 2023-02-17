// Задача 4

const result = [];
let sum = 0;

function sumInput() {

    let number = prompt('number:');

    if (isNaN(number)) {
        sumInput();
    } else if (number === '' || number === null) {
        return 0;
    } else {
        result.push(+number);
        sumInput();
    }
}

sumInput();

result.forEach(el => {
    sum += el;
});

alert(sum);