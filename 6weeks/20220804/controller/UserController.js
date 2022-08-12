// const User = require("../model/User");
// const fs = require("fs").promises;

// exports.index = (req,res) =>{
//     res.render("index.ejs");
// }

// exports.register = (req,res) =>{
//     res.render("register.ejs");
// }

// exports.post_register = (req,res) =>{
//     User.post_user(req.body);
//     res.send(req.body);
// }

// exports.login = (req,res) =>{
//     res.render("login");
// }

// exports.post_login = async (req,res) =>{
//     var data = await User.get_user();

//     var info = data.split("//");

//     if ( info[0] != req.body.id){
//         res.send("아이디 다름");
//     } else if ( info[1] != req.body.pw){
//         res.send("비밀번호 다름");
//     } else {
//         res.send("로그인성공!");
//     }
// }

const { rmSync } = require("fs");
const User = require("../model/User");
const fs = require("fs").promises;

exports.index = (req,res) => {
    res.render("index.ejs");
}

exports.register = (req,res) =>{
    User.port_user(req.body);
    res.send( req.body );
}

exports.login = (req,res) =>{
    res.render("login.ejs");
}