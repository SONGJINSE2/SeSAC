// const fs = require("fs");
// 
// 
// fs.readFile("./test.txt", function(err, data){
//    if ( err ) throw err;
//    else{
    // console.log( data );
    // console.log( data.toString());
//    } 
// });
// 

const fs = require("fs").promises;


fs.readFile("./test.txt")
    .then((data)=>{
        console.log( data );
        console.log( data.toString() );
    })
    .catch((err)=>{
        console.error(err);
    });
