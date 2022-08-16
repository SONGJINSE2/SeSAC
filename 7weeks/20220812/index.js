const express = require('express');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();

app.use(cookieParser('1234'));
app.set("view engine", "ejs");
app.use(session({
    secret: 'secret key', //필수\
    // resave: false, //(선택) 세션을 덮어쓸지말지
    // saveUninitialized: true, //(선택) 처음에 초기값을 설정하지않아도 미리 세션을 만들어놓는다.
    
}))

// const cookieConfig = {
//     maxAge: 30000, //30초 후에 만료됨
//     path: '/', // 쿠키에 접근 할 수 있는 경로
//     httpOnly: true,// 웹서버를 통해서만 가져올 수 있다.
//     signed: true //암호화 시키겠다.
// }

// app.get("/index", (req,res)=>{
//     req.session.key = "value";
//     res.cookie('key','value', cookieConfig);
//     res.cookie('key2','value2', cookieConfig);
//     res.render("index");
// });

// app.get("/get", (req,res)=>{
//     console.log( req.session);
//     // console.log( req.cookies );
//     res.send( req.cookies );
// })

// app.get("/cookie", (req,res)=>{
//     res.cookie('key','value', cookieConfig);
//     res.render("cookie");
// })

// app.get("/destroy", (req,res)=>{
//     req.session.destroy(function(err){
//         res.send("삭제");
//     })
// })

app.get("login", (req,res)=>{
    res.render("login");
})
app.post("/login", (req,res)=>{
    var flag = true;
    if (flag){
        req.session.id = req.body.id;
        res.redirect("/profile");
    }else res.redirect("/login");
});

app.get("/profile", (req,res)=>{
    if ( req.session.id == undefined || req.session.id == ""){
        res.redirect("/login");
        return false;
    }
    res.render("profile");
})

app.get("/main", (req,res)=>{

})

app.listen(8080, ()=>{
    console.log( "Sever Port : ", 8080);
})