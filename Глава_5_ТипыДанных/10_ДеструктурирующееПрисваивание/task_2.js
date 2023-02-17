// Задача 2

const salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {

    if ( !Object.keys(salaries).length ) {
        return null
    }

    const maxValue = Object.values(salaries).sort((a, b) => b - a)[0];

    for (const [key, value] of Object.entries(salaries)) {

        if (value == maxValue) {
            return value;
        }
    }

    return 0;
}

console.log(topSalary(salaries));