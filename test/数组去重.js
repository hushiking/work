var a = [1, 2, 3, 4, 5, 5, 3, 1, 0]
var b = []
var c = []
var flag
console.log(process.argv)
for (var v of a) {
  flag = b.includes(v)
  if (!(flag)) {
    b.push(v)
  }
}
console.log(b)

for (var i in a) {
  if (!(c.includes(a[i]))) {
    c.push(a[i])
  }
}
console.log(c)

var d = new Set(a)
var e = d.values()
console.log(e.next().value)
console.log(e.next().value)
