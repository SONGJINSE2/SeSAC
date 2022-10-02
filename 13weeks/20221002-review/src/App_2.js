// // 클래스형 Component

// import React, { Component } from "react";

// class App_2 extends Component {
//   render() {
//     const name = "";
//     const animal = "";
//     return (
//       <div>
//         <h2>제 반려 동물의 이름은 {this.props.name} 입니다.</h2>
//         <h2>
//           {this.props.name}는 {this.props.animal} 입니다.
//         </h2>
//       </div>
//     );
//   }
// }

// export default App_2;

// 함수형 Component

import React from "react";

const App_2 = (props) => {
  return (
    <div>
      <h2>제 반려 동물의 이름은 {props.name} 입니다.</h2>
      <h2>
        {props.name}는 {props.animal} 입니다.
      </h2>
    </div>
  );
};

export default App_2;
