const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/",function(req,res){
    res.render("index");
});

app.get("/receive",function(req,res){
    console.log( req.query );
    let name = req.query.name;
    let msg = req.query.name + "님 환영합니다";
    res.send({ name: name, message: msg });
});




app.listen(port, ()=>{
    console.log( "Server Port : ", port);
})

