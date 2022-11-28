import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";

function PracticeDefault() {
  const cash = useSelector((state) => state.cash);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>코딩온 은행</h1>
      <h3>잔액 : {cash}원</h3>
      <Button />
    </div>
  );
}

const Button = () => {
  const textInput = useRef(null);
  const dispatch = useDispatch();

  const DepositBtn = () => {
    console.log(textInput.current.value);
    dispatch({ type: "DEPOSIT", a: textInput.current.value });
  };

  const WithdrawBtn = () => {
    console.log(textInput.current.value);
    dispatch({ type: "WITHDRAW", b: textInput.current.value });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input type="number" ref={textInput} />
      <button onClick={DepositBtn}>입금</button>
      <button onClick={WithdrawBtn}>출금</button>
    </div>
  );
};

export default PracticeDefault;
