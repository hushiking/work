var PORT = 8000

var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')

var server = http.createServer(function (request, response) {
  var pathname = url.parse(request.url).pathname
})