const Visitor = require("../model/Visitor");

exports.visitor = (req,res) => {
    Visitor.visitors( function( result ){
        console.log( "result : ", result);
        console.log( "Visitor" );
        res.render( "Visitor", { data: result });
    } );
}

exports.post_comment = (req,res) =>{
    console.log( req.body );

    Visitor.insert( req.body.name, req.body.comment, function( result ){
        res.send({ id: result });
    });
    
}