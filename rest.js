var http = require('http');

port = process.env.PORT || process.argv[2] || 8080;

var server=http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
});
server.listen(port, function () {
 
    console.log('app up on port: ' + port);
 
});
