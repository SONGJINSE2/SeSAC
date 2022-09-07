var exrpess = require("express");
var app = exrpess();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    console.log("client");
    res.sendFile( __dirname + "/index.html");
});
// io -> 클라이언트의 모든 연결을 갖고 있는 친구
// socket -> 클라이언트 한 명. socket.id 클라이언트를 구분하는 식별자
io.on("connection", function(socket){    
    console.log( "Server Socket Connected", socket.id );
    socket.emit("info", socket.id);
    io.emit("notice", socket.id + "님이 입장하였습니다.");
    socket.on("send", function(data){
        // data = { id: ~~~, msg: ~~~};
        console.log( "client message : ", data.msg);
        io.emit("newMessage", data); /* 모든 사람들이 받아야 하기떄문에 io로 보낸다 */
    });

    socket.on("disconnect", function(){    /* disconnect는 접속이 끊겼을 때 */
        io.emit("notice", socket.id + "님이 퇴장하셨습니다.");
    })
});

http.listen( 8000, function(){
    console.log( "Server port : ", 8000 );
});


