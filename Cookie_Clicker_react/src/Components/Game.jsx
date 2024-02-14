import React, { useState, useEffect } from "react";
import "./Game.css";
import Upgrades from "./Upgrades";
import cookieImg from "./assets/cookie.png";
import monsterImg from "./assets/cookie_monster.png";

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
        <img src={cookieImg} alt="Cookie" className="image cookie"
          onClick={incrementCounter}
        />
        <Upgrades />
        <img src={monsterImg} alt="Monster" className="image monster"
          onClick={resetCounter}
        />
      </div>
    </>
  );
}
