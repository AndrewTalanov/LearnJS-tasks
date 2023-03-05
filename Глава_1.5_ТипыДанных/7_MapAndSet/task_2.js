// Задача 2

let arr = ["teg", "get", "nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {

    const result = new Map();

    arr.forEach(el => {
        
        let sorted = el.toLowerCase().split("").sort().join("");
        result.set(sorted, el);
    });

    return Array.from(result.values());
}

console.log( aclean(arr) );