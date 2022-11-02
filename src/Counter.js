import React, { useEffect, useRef, useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    const handleMouseUp = () => {
      clearTimeout(timeoutIdRef.current);
    };

    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleIncrease = () => {
    setCount((count) => count + 1);

    timeoutIdRef.current = setTimeout(() => {
      handleIncrease();
    }, 200);
  };

  const handleDecrease = () => {
    setCount((count) => count - 1);

    timeoutIdRef.current = setTimeout(() => {
      handleDecrease();
    }, 200);
  };

  return (
    <div className="counter-container">
      <button className="counter-button" onMouseDown={handleDecrease}>
        -
      </button>
      <div className="counter-text">{count}</div>
      <button className="counter-button" onMouseDown={handleIncrease}>
        +
      </button>
    </div>
  );
}
