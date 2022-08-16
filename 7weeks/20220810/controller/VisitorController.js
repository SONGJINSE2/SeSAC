// const Visitor = require("../model/Visitor");
const models = require("../model");
// models => model/index.js 에서의 db

exports.get_visitors = (req,res) => {
    //model/Visitor.js 에서의 model
    models.Visitor.findAll() // findAll => sequelize 문법. Select * FROM visitor;
    .then((result) => { 
        // console.log( "result : ", result );
        console.log( "index" );
        console.log( result[0]);
        console.log( result[0].id);
        res.render( "index", {data : result});
    });
    
    // Visitor.get_visitors(function( result ){
    //     console.log( "result : ", result );
    //     console.log( "index" );
    //     res.render("index", { data: result });
    // });
}

exports.post_comment = (req,res) => {
    // console.log( req.body );

    // Visitor.insert( req.body.name, req.body.comment, function( result ){
    //     res.send({ id: result });
    // } );
    let object = {
        name : req.body.name,
        comment: req.body.comment
    };
    models.Visitor.create( object )
    .then((result) => {
        console.log( result );
        res.send({ id: result.id });
        // res.send({ id: result });
    })
}

exports.get_visitor = (req,res) => {
    // Visitor.get_visitor( req.query.id, function(result) {
    //     console.log( "result : ", result );
    //     res.send( { result : result[0] } );
    // })
    models.Visitor.findOne({
        where : { id: req.query.id }  // ,는 AND기능이다.
    }).then((result) => {
        console.log( result );
        res.send( { result : result } );
    })
}   // SELECT * FROM visitor where id = req.body.id limit 1

exports.patch_comment = (req,res) => {
    // Visitor.update( req.body, function(result){
    //     console.log( result );
    //     res.send( "수정 성공" );
    // });

    let newObj = {
        name : req.body.name,
        comment : req.body.comment
    };
    // update visitor set name = req.body.name, comment : req.body.comment
    models.Visitor.update( newObj, {where : { id:req.body.id } } )
    .then((result)=> { 
        console.log( result ); // 몇개가 업데이트 되었는지 알려준다.
        res.send( '수정성공' );
    })
    // models.Visitor.update( 수정할 객체, 조건 )
}

exports.delete_comment = (req,res) => {
    // Visitor.delete( req.body.id, function(result){
    //     console.log( result );
    //     res.send( "삭제 성공" );
    // });
    models.Visitor.destroy({
        where : { name: 'dd', id: req.body.id }
    }).then((result)=> {
        console.log( result );
        res.send( "삭제 성공" );
    })

}