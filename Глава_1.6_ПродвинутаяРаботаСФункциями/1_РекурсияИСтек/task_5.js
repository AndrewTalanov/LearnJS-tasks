// Задача 5

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

function printList(list) {

    const array = [];

    while (list) {
        array.unshift(list.value);
        list = list.next;
    }

    array.forEach(el => {
        console.log(el);
    });
}

function printList(list) {
        
    if (list.next) {
        printList(list.next)
    }
    
    console.log(list.value)
}

printList(list);