import React from "react";
import ReactDOM from "react-dom/client";
import App_1 from "./App_1";
import App_2 from "./App_2";
import App_3 from "./App_3";
import App_4 from "./App_4";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App_1 /> */}
    {/* <App_2 name="로이" animal="강아지" /> */}
    {/* <App_3 txt_true="정답" txt_false="오답" /> */}
    <App_4 txt="a가 b보다 큽니다" />
  </React.StrictMode>
);
