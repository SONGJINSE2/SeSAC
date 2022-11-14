import { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';

import App2 from './App2';
import App3 from './App3';
import './App.css';

const currentState = { number1:0, number2: 0 };

function reducer(number = currentState, action) {
    if (action.type === 'PLUS') {
        if ( action.mode === 'left' ) number.number1++;
        else number.number2++;
        return {...number};
    } else if (action.type === 'MINUS') {
        if ( action.mode === 'left' ) number.number1--;
        else number.number2--;
        return {...number};
    } else{
        return {...number};
    }
}

let store = createStore(reducer);

function Store() {
    // const [number1, setNumber1] = useState(1);
    // const [number2, setNumber2] = useState(2);

    return (
        <div id="container">
            <h1>Root</h1>
            <div id="grid">
                <Provider store={store}>
                    <App2 />
                    <App3 />
                </Provider>
            </div>
        </div>
    );
}

export default Store;