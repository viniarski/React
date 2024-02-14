import React, { useState, useEffect } from "react";
import "./Game.css";
import Upgrades from "./Upgrades";
import Cookie from "./Cookie";
import Monster from "./Monster";

export default function Game() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("cookieCount");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  function incrementCounter() {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      localStorage.setItem("cookieCount", newCount);
      return newCount;
    });
  }

  function resetCounter() {
    setCount(0);
    localStorage.setItem("cookieCount", 0);
  }

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        localStorage.setItem("cookieCount", newCount);
        return newCount;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p className="counter">Cookies: {count}</p>
      <div className="game">
        <Cookie incrementCounter={incrementCounter} />
        <Upgrades />
        <Monster resetCounter={resetCounter} />
      </div>
    </>
  );
}
