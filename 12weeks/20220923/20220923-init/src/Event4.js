//규리선생님 강의 (클래스형 event)

import React, { Component } from 'react';

class EventClass extends Component {

    constructor(props){
        super( props );

        this.printConsole1 = this.printConsole1.bind(this);
    }
    printConsole1(msg){
        console.log("printConsole");
        console.log( msg );
    }
//------------------------------------------------------------ printConsole1 과 같이 쓰려면 구조체에서 bind처리를 해줘야하는데 
//------------------------------------------------------------ printConsole2 과 같이 쓰려면 아래와 같이 화살표 함수를 사용하면 가능하다.
    printConsole2 = () =>{
        console.log("printConsole2");
        console.log( this );
    }
    
    render(){
        return (
            <div>
                <button onClick={()=> {this.printConsole1('2')}}>printConsole1</button> 
                <button onClick={this.printConsole2}>printConsole2</button> 
            </div>
        )
    }
}

export default EventClass;

//클래스형에서는 꼭 this.를 붙여줘야 작동한다.
// 함수를 사용할때는 () 괄호를 빼고 함수이름만 적어야한다.