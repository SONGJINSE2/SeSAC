const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");


app.set("view engine", "ejs");
app.use( express.static( "uploads" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

const upload = multer({
    storage: multer.diskStorage({
        destination( req, file, done ){
            done( null, 'uploads/');
        },
        filename( req, file, done ){
            const ext = path.extname(file.originalname);
            done( null, req.body.id + ext);
        },  
    }),
    limits: { fileSize : 5*1024*1024 },
});

app.get("/",function(req,res){
    res.render("index");
});

app.post("/register", upload.single('userfile'), function(req,res){
    console.log( req.body );
    console.log( req.file );
    res.render("register", { filename: req.file.filename });
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port);
})

