// Задача 7

const answer = prompt('Введите число:');
const result = [];
let flag = true;

for (let i = 2; i < answer; i++) {
    
    flag = true;

    for (let j = 2; j < i/2; j++) {
        
        if (!flag) {
            break;
        }
        else if( i != j && i % j == 0) {
            flag = !flag;
        }
    }

    if (flag) {
        result.push(i);
    }
}

alert(result);