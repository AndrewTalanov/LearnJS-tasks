// Задача 6

function Calculator() {

    const operators = ['+', '-'];
    const expressions = [
        (a, b) => a + b,
        (a, b) => a - b,
    ];

    this.calculate = function(str) {

        str = str.split(' ');

        let a = +str[0];
        let b = +str[2];
        
        for (let i = 0; i < operators.length; i++) {
            
            if (str[1] == operators[i]) {
                
                return expressions[i](a, b);
            }
        }
    }

    this.addMethod = function(str, func) {
        
        operators.push(str);
        expressions.push(func);
        return `Оператор '${str}' добавлен`;
    }
}

let calc = new Calculator();

console.log(calc.addMethod('*', (a, b) => a * b));
console.log(calc.addMethod('/', (a, b) => a / b));
console.log(calc.addMethod("**", (a, b) => a ** b));

console.log(calc.calculate('10 + 5'));
console.log(calc.calculate('10 - 5'));
console.log(calc.calculate('10 * 5'));
console.log(calc.calculate('10 / 5'));
console.log(calc.calculate('10 ** 5'));
