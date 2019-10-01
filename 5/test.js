function Bounds(salary, strategy) {
  this.salary = salary;
  this.strategy = strategy;
}


Bounds.prototype.setSalary = function (salary) {
  this.salary = salary;
}

Bounds.prototype.strategy = function (strategy) {
  this.strategy = strategy;
}

Bounds.prototype.getBounds = function () {
  return this.strategy.calculate(this.salary);
}

function StrategyA() {}

function StrategyB() {}

function StrategyC() {}

StrategyA.prototype.calculate = function (salary) {
  return 4 * salary
}

StrategyB.prototype.calculate = function (salary) {
  return 3 * salary
}

StrategyC.prototype.calculate = function (salary) {
  return 2 * salary
}


bounds = new Bounds(10000, new StrategyA())
bounds.setSalary(15000)

console.log(bounds.getBounds())
