const models = require("../model");


exports.index = (req,res) => {
    res.render("index");
}

exports.signup = (req,res) => {
    res.render("signup");
}

exports.post_signup = (req,res) => {
    let object = {
        id : req.body.id,
        name : req.body.name,
        password: req.body.password,
        email : req.body.email
    };
    models.User.create( object )
    .then((result) => {
        console.log( result );
        res.send({ id: result.id });
    })
}

