import React from "react";
import ReactDOM from "react-dom/client";
import Test from "./Test";
import Test2 from "./Test2";
import Test3 from "./Test3";
// import Test4 from "./Test4";
// import App from "./App";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Test name="송우준" />
    <Test2 />
    {/* <Test3 food="라면">맛있습니다.</Test3> */}
    {/* <Test4
      title="나의 하루는 4시 40분에 시작된다"
      author="김유진"
      price="13,500원"
      type="자기계발서"
    ></Test4> */}
    {/* <App /> */}
  </>
);
