// const fs = require("fs").promises;

// exports.post_user = function(data){
//     console.log(data);

//     let id = data.id;
//     let pw = data.pw;
//     let name = data.name;
//     let age = data.age;

// fs.writeFile('./model/info.txt', id+ "//" + pw + "//" + name + "//" + age)
//     .then(()=>{
//         console.log("작성완료")
//     })
// }

// exports.get_user = async function(){
//     var buffer = await fs.readFile("./model/info.txt");
//     return buffer.toString();
// }

const fs = require("fs").promises;

exports.post_user = function(data){
    console.log(data);
    fs.appendFile('./model/info.txt', ${id}+ "//" + ${pw} + "//" + ${name} + "//" + ${age});
}

exports.get_user = async function(){
    var buffer = await fs.readFile("./model/info.txt");
    return buffer.toString();
}