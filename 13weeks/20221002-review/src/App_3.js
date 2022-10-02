// import React, { Component } from "react";

// class App_3 extends Component {
//   render() {
//     let flag = 3 + 5 == 8;
//     let txt_true = "";
//     let txt_false = "";

//     function cal() {
//       if (flag) txt = "정답입니다";
//       else txt = "오답입니다.";
//     }

//     return <div>{this.txt}</div>;
//   }
// }

// export default App_3;

// 함수형 Component

import React from "react";

const App_3 = (props) => {
  let flag = 3 + 5 == 8;
  let txt_true = "";
  let txt_false = "";
  return (
    <div>
      {flag ? (
        <h1>"{props.txt_true}입니다!"</h1>
      ) : (
        <h1>"{props.txt_false}입니다!"</h1>
      )}
    </div>
  );
};

export default App_3;
