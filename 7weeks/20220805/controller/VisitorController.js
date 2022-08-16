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

exports.get_visitor = (req,res) =>{
    Visitor.get_visitor( req.query.id, function(result) {
        console.log( "result: ", result);
        res.send( { result : result[0] } );
    })
}
// patch도 post와 같이 body로 받아야 한다.
exports.patch_comment = (req,res) =>{
    Visitor.update( req.body, function(result){
        console.log( result );
        res.send( "수정성공" );
    });
}
// delete도 post와 같이 body로 받아야 한다.
exports.delete_comment = (req,res) =>{
    Visitor.delete( req.body.id, function(result){
        console.log( result );
        res.send(" 삭제성공 ");
    })
}
