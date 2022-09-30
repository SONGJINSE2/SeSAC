import React from 'react';
import ReactDOM from 'react-dom/client';
import Hook from './HookuseEffect';
import Reducer from './HookuseReducer';
import Memo from './HookuseCallback';
import Origin from './Origin';
import UseSass from './UseSass';
import CSSModule from './CSSModule';
import StyledComponent from './StyledComponent';
import Practice from './Practice';
import Practice2 from './Practice2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Practice /> */}
    <Practice2 />
  </React.StrictMode>
);


