// Задача 6

let answer = 0;

while(answer <= 100) {
    answer = prompt('Введите число больше 100!');

    if (answer == null || answer == undefined) {
        alert('В следующий раз у Bас обязательно получится!');
        break;
    }
}

(answer > 100) ? alert('Вы смогли!') : '';