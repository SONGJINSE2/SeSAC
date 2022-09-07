var exrpess = require("express");
var app = exrpess();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    console.log("client");
    res.sendFile( __dirname + "/index.html");
});

io.on("connection", function(socket){    
    console.log( "Server Socket Connected" );

    socket.on("Hello", function(data){
        console.log("client :",data);
        socket.emit("clickResponse", 'hello : 안녕하세요?');
    });

    socket.on("Study", function(data){
        console.log("client :",data);
        socket.emit("clickResponse", 'study : 공부합시다!');
    })

    socket.on("Bye", function(data){
        console.log("client :",data);
        socket.emit("clickResponse", 'bye : 안녕히가세요!');
    })

});

http.listen( 8000, function(){
    console.log( "Server port : ", 8000 );
});


// var msg = { hello: "안녕하세요?", study: "공부합시다!"};
// io.on("connetction", function(socket){
//     socket.on("send", function(data){
//         console.log( "client : ". data);
//         socket.emit( "clickResponse", data + " : " + msg[data]);
//     })
// }) 
// 전역변수로 var msg를 정의하여 더 간결하게 쓰일 수 있다.
