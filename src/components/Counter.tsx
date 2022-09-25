import React, { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const changeCount = (type: "minus" | "plus") => {
    return () => {
      setCount(type === "minus" ? count - 1 : count + 1);
    };
  };

  return (
    <div>
      <button onClick={changeCount("plus")}>Increment</button>
      <button onClick={changeCount("minus")}>Decrement</button>
      <p>Счетчик: {count}</p>
    </div>
  );
};

export default Counter;
