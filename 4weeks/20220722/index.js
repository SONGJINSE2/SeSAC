/* const express = require('express');
const app = express();
const port = 8080;

app.set( 'view engine', 'ejs' );
// app.use( express.static( 'public' ) );
app.use( '/abc/aa', express.static( 'public' ) );
        // /abc/aa 라는 가상의 경로를 만드는것이다.
app.get('/', (req,res) => {
    // res.send( 'Hello Express!');
    res.render("test");
    // render는 파일을 불러올때 쓰는 명령어이다.
    // "test"뒤에 ejs를 붙이지 않는 이유는 위에서 모듈을 불러왔기 때문이다.
});

app.listen(port, () => {
    console.log( 'Server port :', port);
}); */


 const express = require('express');
const app = express();
const port = 8080;

app.set( 'view engine', 'ejs' );
// app.use( express.static( 'public' ) );
app.use( '/abc/aa', express.static( 'public' ) );
        // /abc/aa 라는 가상의 경로를 만드는것이다.
app.get('/test3', (req,res) => {
    // res.send( 'Hello Express!');
    res.render("test3", {a: 'aaa', b: 'bbb'});
    // render는 파일을 불러올때 쓰는 명령어이다.
    // "test"뒤에 ejs를 붙이지 않는 이유는 위에서 모듈을 불러왔기 때문이다.
});
app.get('/test4', (req,res) => {
    // res.send( 'Hello Express!');
    res.render("test4");
    // render는 파일을 불러올때 쓰는 명령어이다.
    // "test"뒤에 ejs를 붙이지 않는 이유는 위에서 모듈을 불러왔기 때문이다.
});

app.listen(port, () => {
    console.log( 'Server port :', port);
}); 






