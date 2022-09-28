import React, { Component } from 'react';
import './ScrollBox.css';

class ScrollBox extends Component {

    downBtn = () => {
        console.log( "div1.scrollHeight : ", this.wow.scrollHeight ); // 스크롤 전체 길이
        console.log( "div1.clientHeight : ", this.wow.clientHeight ); // 현재 보이는 길이   
        
        this.wow.scrollTop = this.wow.scrollHeight;
    }

    upBtn = () => {
        this.wow.scrollTop = 0;
    }
    
    //버튼하나로 왔다갔다 할 수 있는 방법 구상
    perfectBtn = () =>{ 

        this.wow.scrollTop === 0 ? this.wow.scrollTop = this.wow.scrollHeight : this.wow.scrollTop = 0;
        
    }


    render(){
        return (
        <div>
            <div className="div1" id="div1" ref={(ref) => {this.wow = ref}}>
            <div className="div2"></div>
            </div>
            <button onClick={this.downBtn} >Down 버튼</button>
            <button onClick={this.upBtn}>Up 버튼</button>
            <button onClick={this.perfectBtn}>완성키</button>
        </div>
        );
    }
}




export default ScrollBox;

