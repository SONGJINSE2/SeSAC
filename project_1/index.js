const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");


app.set("view engine", "ejs");
app.use( "/static", express.static( "static" ) );
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get('/test', (req,res) => {
    res.render("index");
});

app.get('/test2', (req,res) => {
    res.render("stats");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});
