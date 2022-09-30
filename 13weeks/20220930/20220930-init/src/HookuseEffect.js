import React, { useState, useEffect } from 'react';

const Hook = () => {
    const [ name, setName ] = useState("");
    const [ cnt, setCnt ] = useState(0);
    
    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeCnt = () =>{
        setCnt( cnt + 1);
    }
    
    // * useEffect 함수 *
    // useEffect(()=>{
    //     console.log("useEffect");
    //     console.log( "name : ", name );
    // }, [cnt]); 

    // useEffect 뒤에 [] 배열을 보내게되면 바꼈을때만 실행하게한다.
    // [] 배열안에 내가 검사하고싶은 state값을 넣으면 된다.

    // componentDidUpdate(prevProps, prevState){
    //     if( prevState.name != this.state.name ){
        
    //     }
    // }

    useEffect(()=>{
        console.log("name1 : ", name );
        return() => {
            console.log("name2 :", name);
        }
    },[name]); 
    // 뒷정리 함수 : 그동안에는 update 되고 난 후에 바로 실행되는 함수들만 있었는데,
    // update되기 직전에 실행되는 함수가 뒷정리 함수다. 

    return (
        <div>
            <div>
                <input value={name} onChange={changeName}/>
                <button onClick={changeCnt}>+1</button>
            </div>
            <h3>이름 : {name} </h3>
            <h4>횟수 : {cnt} </h4>        
        </div>
    )
}
    

export default Hook;