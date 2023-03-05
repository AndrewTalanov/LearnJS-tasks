// Задача 2

let schedule = {
    key: 'da',
};

function isEmpty(schedule) {
    
    for (const key in schedule) {

        if (key in schedule) {
            return false;
        }
    }

    return true;
}

alert( isEmpty(schedule) );