// Задача 4

const ladder = {

    step: 0,

    up: function() {
      this.step++;
    
      return this;
    },
    down: function() {
      this.step--;

      return this;
    },
    showStep: function() {
      console.log( this.step );

      return this;
    }
}

console.log( ladder.down().up().up().showStep() ); // step = 1