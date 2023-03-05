// Задача 2

const calc = {

    x1: 0,
    x2: 0,

    read: function(x1, x2) {
        this.x1 = x1;
        this.x2 = x2;
    },
    sum: function() {
        return this.x1 + this.x2;
    },
    mul: function() {
        return this.x1 * this.x2;
    }
}