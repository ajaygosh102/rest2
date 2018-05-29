var http = require('http'),

port = process.env.PORT || process.argv[2] || 8080;

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = http.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(port, function () {
 
    console.log('app up on port: ' + port);
});
