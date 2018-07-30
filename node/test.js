var _ = require('underscore')

var a = _.each([1, 2, 3], function(num) {
  return num * 3
  console.log(num)
})

var b = _.map([4, 5, 6], function(num) {
  return num * 3
  console.log(num)
})

console.log(a)
console.log(b)

// 对象转为数组
var _ = require('underscore')
var o = {
  '1': {A: 3, B:2},
  '2': {A: 4, B:5}
}

var arr = _.toArray(o)

console.log(arr)