import React, { useState } from "react";

function StateFunction() {
  const [cnt, setCnt] = useState(0);

  function Increase() {
    setCnt(cnt + 1);
  }

  function Decrease() {
    setCnt(cnt - 2);
  }

  return (
    <div>
      <p>cnt : {cnt}</p>
      <button onClick={Increase}>Increase +1</button>
      <button onClick={Decrease}>Decrease -2</button>
    </div>
  );
}

export default StateFunction;
