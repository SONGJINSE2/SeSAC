const http = require("http");
const hostname = '101.101.211.155';
const port = 22;
const server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    res.write("<h1>hi</h1>");
    res.end("<p>안녕</p>");
});

server.listen( port, hostname , () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

server.on( "request", function(){
    console.log( "Client Request");
})

server.on( "connection", function(){
    console.log( "Client Connection");
})

server.on( "checkContinue", function(){
    console.log( "Client checkContinue");
})