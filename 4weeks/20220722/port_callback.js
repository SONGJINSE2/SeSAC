const http = require("http");
const fs = require('fs');

const server = http.createServer( function(req,res){
    fs.readFile('./test.html' , function( err, data ){
        if ( err ) {
            // promise 에서의 catch

            console.error(err);
            res.writeHead(404);
            res.end(err.message);

        }
        else {
            // promise 에서의 try

            res.writeHead(200);
            res.end(data);

        }
    });
});

