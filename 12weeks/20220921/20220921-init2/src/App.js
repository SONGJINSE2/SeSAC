import React from "react";
import Test5 from "./Test5";

const App = () => {
  const my_func = () => {
    console.log("콘솔 띄우기 성공!");
  };

  return (
    <div>
      <Test5
        text="App 컴포넌트에서 넘겨준 text props 입니다."
        valid={my_func}
      ></Test5>
    </div>
  );
};

export default App;
