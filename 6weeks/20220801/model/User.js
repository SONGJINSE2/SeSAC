const express = require("express")
const fs = require("fs").promises; //promises를 사용하면 무조건 then으로 받는다.

exports.post_user = function( data ){
    console.log( data );

    let id = data.id;
    let pw = data.pw;
    let name = data.name;
    let age = data.age;

fs.writeFile('./model/info.txt', id+ "//" + pw + "//" + name + "//" + age )
    .then(()=>{
        console.log("작성 완료");
    })

}

exports.get_user = async function(){
    var buffer = await fs.readFile("./model/info.txt");
    return buffer.toString();
}