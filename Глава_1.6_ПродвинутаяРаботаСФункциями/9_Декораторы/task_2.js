// Задача 2

function f(x) {
    console.log(x);
}

function delay(f, time) {

    return function decor(...args) {
        const id = this;
        setTimeout(() => {
            f.apply(id, args);
        }, time);
    }
}
  
let f1000 = delay(f, 1000);
let f2000 = delay(f, 2000);
  
f1000("test");
f2000("test");
