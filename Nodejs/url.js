const { Console } = require("console");
const url = require("url");
const { URL } = url;

const string = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%B2%AD%EB%85%84%EC%B7%A8%EC%97%85%EC%82%AC%EA%B4%80%ED%95%99%EA%B5%90";
const naver = new URL(string);

console.log( url.format( naver ));
console.log( url.parse(string));

console.log( naver.searchParams );
// URL불러오기

