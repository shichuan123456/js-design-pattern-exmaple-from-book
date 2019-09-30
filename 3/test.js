/* 
  切面编程：思想很好，符合封闭原则，实现思路其实挺简单的
  实现方式：返回一个函数，用返回的函数然后整合各个函数的执行顺序
*/
Function.prototype.before = function (beforefn) {
  var __self = this
  return function () {
    beforefn.apply(this, arguments)
    return __self.apply(this, arguments)
  }
}

Function.prototype.after = function (afterfn) {
  var __self = this
  return function () {
    var ret = __self.apply(this, arguments)
    afterfn.apply(this, arguments)
    return ret
  }
}

var func = function () {
  console.log(2)
  return 2;
}

func = func
  .before(function () {
    console.log(1)
    return 1
  })
  .after(function () {
    console.log(3)
    return 3
  })

console.log(func())
