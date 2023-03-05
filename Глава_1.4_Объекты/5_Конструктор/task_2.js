// Задача 2

function Calc() {

    this.x1 = 0;
    this.x2 = 0;

    this.read = function() {
        this.x1 = +prompt('x1:');
        this.x2 = +prompt('x2:');
    }
    this.sum = function() {
        return this.x1 + this.x2;
    }
    this.mul = function() {
        return this.x1 * this.x2;
    }
}

const newCalc = new Calc();

newCalc.read();

alert(newCalc.sum());
alert(newCalc.mul());