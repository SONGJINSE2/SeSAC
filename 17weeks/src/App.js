import './App.css';
import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';


function reducer(currentState, action){
  if(currentState === undefined){
    return{
      number1: 1,
      number2: 1
    }
  }
  const newState = {...currentState};
  if(action.type === 'PLUS'){
    newState.number1++;
  } else if(action.type === 'MINUS'){
    newState.number2--;
  }
  return newState;

}


const store = createStore(reducer);

function App() {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(2);

  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

function Left1(props){
  return(
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  )
}

function Left2(props){
  function f(state){
    return state.number2;
  }

  const number = useSelector(state=>state.number2);
  return(
    <div>
      <h1>Left2 : {number} </h1>
      <Left3></Left3>
    </div>
  )
}

function Left3(props){
  function f(state){
    return state.number1;
  }

  const number = useSelector(state=>state.number1);
  return(
    <div>
      <h1>Left3 : {number} </h1>
    </div>
  )
}

function Right1(props){
  return(
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  )
}
function Right2(props){
  const dispatch = useDispatch();
  return(
    <div>
      <h1>Right2</h1>
      <input type="button" value="+" onClick={()=>{dispatch({type:'PLUS'})}}></input>
      <input type="button" value="-" onClick={()=>{dispatch({type:'MINUS'})}}></input>
      <Right3></Right3>
    </div>
  )
}
function Right3(props){
  const dispatch = useDispatch();
  return(
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={()=>{dispatch({type:'PLUS'})}}></input>
      <input type="button" value="-" onClick={()=>{dispatch({type:'MINUS'})}}></input>
    </div>
  )
}
export default App;
