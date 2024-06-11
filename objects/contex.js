'use strict'
let task = {
  isDone: true,
  estHours: 16,

  getObject: function () {
    return this
  },

  getObject2: () => this
}

console.log(task.getObject()) // {isDone: true,estHours: 16, getObject: [Function: getObject], getObject2: [Function: getObject2]}
console.log(task.getObject2()) // {}

// =======================
const task2 = {
  isDone: true,
  estHours: 16,

  updateEstHours: function (value) {
    this.estHours = value
    let fn = function () {
      console.log(this) // use strict - undefined, global
    }
    fn() // function calls in global scope

    // =======
    let fn2 = () => {
      console.log(this) // object task2
    }
    fn2() // arrow function use scope were was defined
  }
}

task2.updateEstHours(8)
console.log(task2.estHours) // 16
