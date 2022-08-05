const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use( express.static( "uploads" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json());
const router = require("./routes");
app.use("/user", router);
app.get("/", function(req,res){
    res.send("Index");
})
app.listen( port, ()=>{
    console.log( "Sever Port : " , port);
})


