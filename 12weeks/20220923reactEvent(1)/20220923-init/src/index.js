import React from 'react';
import ReactDOM from 'react-dom/client';
import StateClass from './StateClass';
import StateFunction from './StateFunction';
import Test1 from './Test1';
import Test2 from './Test2';
import Event from './Event';
import Event2 from './Event2';
import Event3 from './Event3';
import Event4 from './Event4';
import Handler_ex from './ex/Handler_ex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StateClass />
    <StateFunction /> */}
    {/* <Test1/> */}
    {/* <Test2/> */}
    {/* <Event /> */}
    {/* <Event2 /> */}
    {/* <Event3/> */}
    {/* <Event4/> */}
    <Handler_ex />
  </React.StrictMode>
);

