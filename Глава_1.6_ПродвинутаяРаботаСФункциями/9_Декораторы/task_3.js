// Задача 3

function test(x) {
    console.log(x);
}

let f = debounce(test, 1000);

f(1);
f(2);

setTimeout( () => f(3), 100);
setTimeout( () => f(4), 1100);
setTimeout( () => f(5), 1500);

function debounce(f, time) {

    let isCooldown = false;
  
    return function() {
      if (isCooldown) return;
  
      f.apply(this, arguments);
  
      isCooldown = true;
  
      setTimeout(() => isCooldown = false, time);
    };
  
}