var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res) {
  console.log(req.url)
  var pathname = req.url
  var realPath = __dirname + pathname
  console.log(realPath)
  if (pathname == '/') {
    fs.readFile('./vue-ajax交互并传递数据.html', function(err, data) {
      if (err) {
        res.write('404,您访问的页面不存在!')
        res.end()
      } else {
        // res.write(data)
        res.end(data)
      }
    }) 
  }
  if (pathname.startsWith('/lib')) {
    fs.readFile(realPath, function(err, data) {
      if (err) {
        res.end('404')
      } else {
        res.end(data)
      }
    })
  }
  if (pathname == '/a.txt') {
    fs.readFile(realPath, function(err, data) {
      if (err) {
        res.end('404')
      } else {
        res.end(data)
      }
    })
  }
  if (pathname == 'get.js') {
    fs.readFile(realPath, function(err, data) {
      if (err) {
        res.end('404')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/javascript'
        })
        res.end(data)
      }
    })
  }
})

server.listen(8888)
console.log('Server running at port:8888')