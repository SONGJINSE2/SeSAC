var exrpess = require("express");
var app = exrpess();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    console.log("client");
    res.sendFile( __dirname + "/index.html");
});

io.on("connection", function(socket){    /* on은 읽는다는 뜻 */
    console.log( "connected" );
    socket.emit("hello", "server hello"); /* emit은 보낸다는 뜻 (html에서 hello라는 곳으로 server hello를 보낼것이다) */
    socket.on("click", function(data){
        console.log("client click");
        socket.emit("clickResponse", 'success');
        io.emit("clickResponse", "io success");
    });
});

http.listen( 8000, function(){
    console.log( "Server port : ", 8000 );
});