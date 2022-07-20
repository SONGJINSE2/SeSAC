let obj = {
    key1: "value1",
    key2: "value2",
    key3: function(){
        console.log( "a" );
    }
};
        // key1의 이름을 key00으로 바꾸겠다.
const { key1: key00, key1, key2, key3, key4="a" } = obj;
key3();
console.log( key4 );
console.log( key00 );
console.log( key1 );

        // ...은 전개연산자
let obj2 = { a:1, b:2, c:3, d:4 };
const { a, b, ...rest } = obj2;

console.log( rest );





