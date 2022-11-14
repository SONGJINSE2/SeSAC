import { useDispatch, useSelector } from 'react-redux';

function App3() {
    const $num2 = useSelector((str) => str);
    console.log( $num2 );
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <h1>Right</h1>
                <p>{$num2.number2}</p>
            </div>

            <input type="button" value="+" onClick={() => { dispatch({ type: 'PLUS', mode: 'right' }) }}></input>
            <input type="button" value="-" onClick={() => { dispatch({ type: 'MINUS', mode: 'right' }) }}></input>
        </div>
    )
}
export default App3;
