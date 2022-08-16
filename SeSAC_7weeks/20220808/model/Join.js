const { query } = require("express");
const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'joinin'
});

exports.member = (cb) =>{
    cnn.query( 'SELECT * FROM join_tb', (err, rows)=>{
        if ( err ) throw err;
        cb(rows);
    });
    
}