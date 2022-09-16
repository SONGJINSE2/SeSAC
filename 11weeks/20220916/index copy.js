var exrpess = require("express");
const { send } = require("process");
var app = exrpess();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req,res){
    console.log("client");
    res.sendFile( __dirname + "/index.html");
});
// io -> 클라이언트의 모든 연결을 갖고 있는 친구
// socket -> 클라이언트 한 명. socket.id 클라이언트를 구분하는 식별자
var list = {};
io.on("connection", function(socket){    
    console.log( "Server Socket Connected", socket.id );
    socket.on("info2", function(data){
        list[socket.id] = data.nickname;
        io.emit("notice", data.nickname + "님이 입장하셨습니다.");
        io.emit("list", list );
    });
    // socket.emit("info", socket.id);
    socket.on("send", function(data){
        // data = { msg : "", to: ""};
        console.log( "client message : ", data.msg);
        data["is_dm"] = false;
        data["nickname"] = list[socket.id];
        if (data.to == "전체"){
            io.emit("newMessage", data); /* 모든 사람들이 받아야 하기떄문에 io로 보낸다 */
        } else {
            data["is_dm"] = true;
            let socketID = Object.keys(list).find( (k) => { return list[k] === data.to; }); // find = 조건식이 같으면 return
            io.to(socketID).emit("newMessage", data);
            socket.emit("newMessage", data);
        }
        
    });

    socket.on("disconnect", function(){    /* disconnect는 접속이 끊겼을 때 */
        io.emit("notice", socket.id + "님이 퇴장하셨습니다.");
        delete list[socket.id];
    });
});

http.listen( 8000, function(){
    console.log( "Server port : ", 8000 );
});


