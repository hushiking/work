var express = require('express')
var fs = require('fs')

var app = express()

app.get('/', function(req, res) {
  var jsonObj = JSON.parse(fs.readFileSync('./data.json'))
  res.json(jsonObj)
})

app.listen(8080, function afterListen() {
  console.log('express running on the http://localhost:8080')
})