var http = require('http');

var userCount = 0;
http.createServer(function (request, response) {
	console.log('new connection');
	userCount++;

	response.writeHead(200, {'Content-type': 'text/plain'});
	response.write('Hello\n');
	response.write('We have had '+userCount+' visits!\n');
	response.end();
}).listen(8080);

console.log('Server started');
