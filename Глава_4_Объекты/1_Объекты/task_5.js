// Задача 5

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
function multiplyNumeric(obj) {

    for (const key in obj) {
        typeof obj[key] == 'number' ? obj[key] *= 2 : '';
    }
}

multiplyNumeric(menu);

// после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };