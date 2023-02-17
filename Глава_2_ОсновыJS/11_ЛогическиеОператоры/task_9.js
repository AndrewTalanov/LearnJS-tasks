
let login = prompt('Введите логин:');
let password;

if (login == 'Админ') {
    password = prompt('Введите пароль:');

    if (password == 'Я главный') {
        alert('Здравствуйте');
    } else if (password == undefined || password == null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }

} else if (login == undefined || login == null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю(');
}
