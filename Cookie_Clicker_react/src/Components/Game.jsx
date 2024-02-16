import "./Game.css";
import Counter from "./Counter";
import Cookie from "./Cookie";
import { useState, useEffect } from "react";

export default function Game() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  const [totalCPS, setTotalCPS] = useState(0);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <>
      <Counter count={count} setCount={setCount} />
      <div className="game">
        <Cookie count={count} setCount={setCount} />
      </div>
    </>
  );
}