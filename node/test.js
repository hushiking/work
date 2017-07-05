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