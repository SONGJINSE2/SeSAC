import React, { Component } from "react";

class StateClass extends Component {
  // constructor(props){
  //   super(props);   // 부모의 props값을 상속한다.

  //   this.state = {
  //     name : "SeSAC",
  //     list : ['s','e','s','a','c'],
  //   };
  // }

  state = {
    name: "SeSAC",
    cnt: 0,
    list : ['s','e','s','a','c'],
  };  // 요즘버전은 이렇게 간단하게 쓸 수 있다.

  render() {
    return (
      <div>
        <div>{this.state.name} StateClass {this.state.cnt}</div>
        <button onClick={()=>{ 
          // this.setState({name: "청년취업사관학교", cnt: this.state.cnt +1}); 
          // this.setState({name: "영등포 캠퍼스", cnt:this.state.cnt+1});
          this.setState(prevState =>{
            return { cnt: prevState.cnt+1 }
          });
          this.setState(prevState =>{
            return { cnt: prevState.cnt+1}
          }); // 순서대로 적용되게하려면 setState안에 함수를 설정하여야 위에서부터 순서대로 적용된다.
          }}>클릭</button>
        <button onClick={()=>{ this.setState({list: ['c','l','i']})}}>클릭2</button>  
        <ul>
          {this.state.list.map((txt)=>{   // map은 반복문을 돌릴때 사용하는 친구
            return <li>{txt}</li>
          })}
        </ul>
      </div>
    );
  }
}

//setState는 비동기처리이다.
export default StateClass;
