import "./Game.css";
import Counter from "./Counter";
import Upgrades from "./Upgrades";
import Cookie from "./Cookie";
import ResetButton from "./Monster";
import { useState, useEffect } from "react";

export default function Game() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <>
      <Counter count={count} setCount={setCount} />
      <div className="game">
        <Cookie count={count} setCount={setCount} />
        <Upgrades count={count} setCount={setCount} />
        <ResetButton resetCount={setCount} />
      </div>
    </>
  );
}