const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const fs = require("fs");

app.set( "view engine", "ejs");
app.use( express.static("public") );
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json());

const router = require("./routes/index.js");
app.use("/", router);

app.listen( port, ()=>{
    console.log( " Server Port : ", port);
})



