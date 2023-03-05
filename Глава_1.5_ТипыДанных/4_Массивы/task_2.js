// Задача 2

const styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

styles[ Math.round( (styles.length - 1) / 2 ) ] = 'Классика';

console.log(styles[0]);

styles.shift(0);

styles.unshift('Рэп', 'Регги');