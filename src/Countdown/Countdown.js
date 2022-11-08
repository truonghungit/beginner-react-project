import { useEffect, useState } from "react";
import "./Countdown.css";

export default function Countdown({ timer }) {
  const [count, setCount] = useState(timer);

  useEffect(() => {
    setCount(() => timer);
    const id = setInterval(() => {
      setCount((pre) => (pre > 1 ? pre - 1 : timer));
    }, 1000);

    return () => {
      console.log("clear interval");
      clearInterval(id);
    };
  }, [timer]);

  return <div className="countdown">{`${count}`.padStart(2, "0")}</div>;
}
