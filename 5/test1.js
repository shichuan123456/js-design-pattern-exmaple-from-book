const strategy = {
  'A': function (salary) {
    return 4 * salary
  },
  'B': function (salary) {
    return 3 * salary
  },
  'C': function (salary) {
    return 2 * salary
  }
}

const calcuBounds = function (stra, salary) {
  return strategy[stra](salary)
}

console.log(calcuBounds('A', 10000))
