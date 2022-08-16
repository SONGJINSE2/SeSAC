const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs").promises;

app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/",function(req,res){
    res.render("index3");
});

app.get("/receive",function(req,res){
    console.log( req );
    console.log( req.query );
    res.render("receive", req.query);
});

app.post("/receive2",function(req,res){
    console.log( req );
    console.log( req.body );
    res.render("receive2", req.body);
});

app.post("/receive3",function(req,res){
    console.log( req );
    console.log( req.body );
    res.render("receive3", req.body);

    var id = req.body.id;
    var name = req.body.name;
    var pw = req.body.pw1;
     
    fs.writeFile('./info.txt', id+ "//" + name + "//" + pw )
    .then(()=>{
        console.log("작성 완료");
    })
    .catch((err)=>{
        console.log( err );
    });
});



// app.post("/receive",function(req,res){
//     console.log( "receive-post" );
//     console.log( req.body );
//     res.render("index");
// });

app.listen(port, ()=>{
    console.log( "Server Port : ", port);
})

