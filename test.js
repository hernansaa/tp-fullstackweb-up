var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hola Mundo!');
    res.end();
}).listen(8080);