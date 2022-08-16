// cookieParser를 이용하여 웹페이지 접속 횟수를 찍어내는 방법

const express = require("express");
const app = express();
const port = 8080;

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/count", function( req, res ){
    if(req.cookies.count){
        var count = parseInt(req.cookies.count); 
    } else {
        var count = 0;
    }
    count = count+1
    res.cookie("count", count);
    res.send("count:" +req.cookies.count);
})

app.listen( port, ()=>{
    console.log( "Server port : " , port );
})