import { useDispatch, useSelector } from 'react-redux';

function App2() {
    const $num = useSelector((num) => num);
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <h1>Left</h1>
                <p>{$num.number1}</p>
            </div>

            <input type="button" value="+" onClick={() => { dispatch({ type: 'PLUS', mode: 'left' }) }}></input>
            <input type="button" value="-" onClick={() => { dispatch({ type: 'MINUS', mode: 'left' }) }}></input>
        </div>
    )
}
export default App2;
