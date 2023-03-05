// Задача 1

// Через свойства функции
function makeCounter() {

    function counter() {
        return counter.count++;
    };

    counter.count = 0;

    counter.set = function(value) {
        counter.count = value;
    }

    counter.decrease = function() {
        counter.count -= 1;
    }

    return counter;
}

let counter = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1

counter.set(10); // установить новое значение счётчика

console.log( counter() ); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log( counter() );