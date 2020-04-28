var http = require('http'); //protocol
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});
app.listen(80); // port

/*
http://opentutorials.org:3000/main?id=HTML&page=12

http = protocol
opentutorials.org = host (domain)
3000 = (port)
main = path
main?id=HTML&page=12 = query string
*/
