var http = require('http');
var url = require('url');

http.createServer(function (request, response){
	response.writeHead(200 {'content-type': 'text/plain'});

	if(url.parse(request.url).pathname == '/wait'){
		var startTime = new Date().getTime();
		while (new Date().getTime() < startTime + 15000);
		response.write('thanks for waiting');
	} else {
		response.write('hello');
	}

	response.end;
}).listen(8080);

console.log('server started');
