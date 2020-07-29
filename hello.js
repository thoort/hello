// Just a simple "Hello World" app - for docs and tutorials

http = require('http');
port = "8080"

http.createServer(function (request, response) {
   // Can change who we say "hi" to via the TARGET env var
   target = process.env.TARGET ? process.env.TARGET : 'World' ;
   port = process.env.PORT ? process.env.PORT : port ;

   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello ' + target + '\n');
}).listen(port);

console.log('Server running at on port ' + port);
