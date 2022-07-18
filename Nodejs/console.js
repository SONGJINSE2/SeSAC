const obj = {
    out: {
        in: {
            key: 'value'
        }
    }
};
console.log( obj );
console.log( obj["out"]);
console.log( obj["out"]["in"]);

console.time("시간");

console.error("에러!"); //에러메세지

console.trace("Error"); //에러메세지

console.table([{name: 'abc', birth: 1990}, {name: 'def', birth:1980}]); //테이블생성

console.dir(obj, {colors: true, depth: 2} );
console.dir(obj, {colors: false, depth: 1} );

console.timeEnd("시간");