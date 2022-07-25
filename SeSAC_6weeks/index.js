const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs");

app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/",function(req,res){
    res.render("index");
});

app.post("/receive",function(req,res){
    // console.log( req );
    // console.log( req.body );
    res.render("receive", req.body);

    let {loginId, loginPw} = req.body;
    let loginTxt;
    // console.log( loginId + loginPw);

    // fs.readFile("./info.txt")
    // .then((data)=>{
        // loginTxt = data.toString().split('//');
    // })
    // .catch((err)=>{
        // console.log(err);
    // })
    var data =fs.readFileSync("./info.txt").toString().split('//');
    
    
    let a = data[0];
    let b = data[1];
    console.log(a,b);


    if(loginId == a && loginPw == b){
        console.log('로그인 되었습니다.');
    } else{
        console.log('로그인이 실패하였습니다.');
    }

});


app.listen(port, ()=>{
    console.log( "Server Port : ", port);
})

