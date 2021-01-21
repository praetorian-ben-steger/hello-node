
var http = require('http'); // 1 - Import Node.js core module

http.createServer(function (req, res) {

    var response = 'Hello!';
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(response);

}).listen(8080);
