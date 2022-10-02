import React from "react";

const App_4 = (props) => {
  let a = 7;
  let b = 5;
  let flag = a > b;
  let txt = "";
  return <div>{flag && <h1>"{props.txt}"</h1>}</div>;
};

export default App_4;
