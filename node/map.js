var _ = require('underscore')

var o = {
  '1': {A: 3, B:2},
  '2': {A: 4, B:5}
}

var arr = _.toArray(o)

console.log(arr)