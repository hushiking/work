var url = require('url')
var http = require('http')

http.createServer(function(req, res) {
  var queryString = url.parse(req.url, true).query
  var a = queryString.a
  var b = queryString.b
  var sum = a + b
  res.end(sum)
}).listen(8888)
