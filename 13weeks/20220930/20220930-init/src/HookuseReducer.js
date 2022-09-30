import {useReducer} from 'react';

function reducer(state, action){
    switch ( action.type ){
        case "INCREMENT":
            return { value : state.value + 1};
        case "DECREMENT":
            return { value : state.value - 1};
        default :
            return state;
    }
}

const Reducer = () =>{
    const [state, dispatch] = useReducer(reducer, {value : 0});    // useReducer( 함수자리, reducer 상태의 기본값 )
        // dispatch는 필요한 액션값을 전달 받는다.
    return (
        <div>
            <h1>{state.value}</h1>

            <button onClick={()=>{dispatch({ type: "DECREMENT" })}}>-1</button>
            <button onClick={()=>{dispatch({ type: "INCREMENT"})}}>+1</button>
        </div>
    )
}

export default Reducer;