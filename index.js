var http = require('http');

http.createServer(function (req, res) {
  homeRoute(req, res);
}).listen(3000);
console.log('Server running');


function homeRoute(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Header\n');
  res.write('Search\n');
  res.end('Footer\n');
}

function userRoute(req, res) {
  var username = request.url.replace('/', '');
  if (username.length > 0) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Header\n');
    res.write(username + '\n');
    res.end('Footer\n');
  }
}
