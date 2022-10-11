import React, { useState } from "react";

const App_9 = () => {
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
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
    </div>
  );
};

export default App_9;
