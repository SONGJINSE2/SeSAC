import React from 'react';
import ReactDOM from 'react-dom/client';
import Test from './Test';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Test name='송진세'/>
    <Test2 />
    <Test3 food='라면'>맛있습니다.</Test3> */}
    <Test4></Test4>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

