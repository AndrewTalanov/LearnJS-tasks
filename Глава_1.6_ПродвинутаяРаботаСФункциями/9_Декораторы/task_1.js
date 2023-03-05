// Задача 1

function work(a, b) {
    console.log( a + b );
}

work = spy(work);

work(1, 2);
work(2, 5);

function spy(func) {

    function decor(...args) {

        decor.calls.push(args);
        
        return func.apply(this, args);
    }

    decor.calls = [];

    return decor;
}

for (let args of work.calls) {
    console.log( 'call:' + args.join() );
}
