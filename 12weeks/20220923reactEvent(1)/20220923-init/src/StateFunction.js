import React, { useState } from 'react';

function StateFunction (){
    const [msg, setMsg] = useState("");
    const [list, setList] = useState([]);
    //this.state {
        // msg :""
    //} 클래스에서의 모습
    
    function changeMsg(){
        setMsg("메세지")
        // setStage({msg: "메세지"}) 클래스에서의 모습
    }

    function changeList(){
        setList("리스트")
    }

    return(
        <div>
            <p>{msg}</p>
            <p>{list}</p>
            StateFunction
            <button onClick={changeMsg}>클릭</button>
            <button onClick={changeList}>클릭2</button>
        </div>
    )
}

export default StateFunction;