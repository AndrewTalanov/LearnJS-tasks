// Задача 12

function unique(arr) {

    arr.forEach(el => {

        if (arr.indexOf(el) != arr.lastIndexOf(el)) {
            arr.splice(arr.lastIndexOf(el), 1);
        }

        if (arr.indexOf(el) != arr.lastIndexOf(el)) { 
            unique(arr);
        }
    });
    
    return arr;
}

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
  
console.log( unique(strings) );