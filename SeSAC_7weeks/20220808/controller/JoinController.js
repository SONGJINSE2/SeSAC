const Join = require("../model/Join");

exports.Join_in = (req,res) => {
    Join.member( function( result ){
        console.log( "result : ", result);
    } );
}

exports.post_comment = (req,res) =>{
    console.log( req.body );

    Visitor.insert( req.body.name, req.body.comment, function( result ){
        res.send({ id: result });
    });
    
}

