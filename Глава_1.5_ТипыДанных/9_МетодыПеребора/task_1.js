// Задача 1

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries) {

    let sum = 0;

    const values = Object.values(salaries);

    for (const el of values) {
        sum += el;
    }

    return sum;
}

console.log( sumSalaries(salaries) );