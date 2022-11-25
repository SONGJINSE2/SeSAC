import { useDispatch, useSelector } from "react-redux";

function App4() {
  const $num2 = useSelector((str) => str);
  console.log($num2);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h1>Right</h1>
        <p>{$num2.number2}</p>
      </div>

      <input
        type="text"
        onChange={() => {
          dispatch({ type: "PLUS" });
        }}
      ></input>
    </div>
  );
}
export default App4;
