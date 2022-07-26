const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs");

app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use( express.urlencoded( {extended : true} ));
app.use( bodyParser.json());

app.get("/", function(req,res){
    res.render("index");
});

app.post("/receive", function(req,res){
    res.render("receive",req.body);


let { loginId, loginPw } = req.body;

var data = fs.readFileSync("./info.txt").toString().split("//");

let a = data[0];
let b = date[1];
console.log(a,b);

if(loginId == a && loginPw == b){
    console.log("로그인되었습니다.")
}
else{
    console.log("로그인에 실패하였습니다.")
}

});

app.listen(port, ()=>{
    console.log(" Sever port : ", port);
})
    



