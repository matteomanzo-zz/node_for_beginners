var http = require('http');
var url = require('url');

function onRequest (request, response) {
	console.log('Request has been received.');
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello world');
	response.end();
};

	http.createServer(onRequest).listen(8888);
	console.log('server has started');

