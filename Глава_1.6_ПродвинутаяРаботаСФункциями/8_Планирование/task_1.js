// Задача 1

function printNumbers(from, to) {
    const intervalId = setInterval(() => {

        console.log(from);

        if (from == to) {
            clearInterval(intervalId);
        }

        from++;
    }, 1000);
}

function printNumbers(from, to) {

    let intervalId = setTimeout(function test() {

        console.log(from);

        if (from == to) {
            return clearInterval(intervalId);
        }

        from++;

        intervalId = setTimeout(test, 1000);
    }, 1000);
}

printNumbers(1, 10);


