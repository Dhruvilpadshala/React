import React, { useState } from "react";

export default function Value() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Value : {count}</h1>
      <button style={{ margin: "10px" }} onClick={increment}>
        increment
      </button>
      <button style={{ margin: "10px" }} onClick={decrement}>
        decrement
      </button>
      <button style={{ margin: "10px" }} onClick={() => setCount(0)}>
        reset
      </button>
    </div>
  );
}
