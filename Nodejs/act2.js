const url = require("url");
const { URL } = url;

const string = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sessac";
const naver = new URL(string);

console.log( naver.searchParams.keys());
console.log( naver.searchParams.values());
naver.searchParams.delete('sm');
console.log( naver.searchParams.keys());
