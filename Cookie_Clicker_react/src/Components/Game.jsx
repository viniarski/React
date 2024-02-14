import { useState, useEffect } from "react";
import './Game.css';
import Upgrades from "./Upgrades";

export default function Game() {

    const  [count, setCount] = useState(0);

    function incrementCounter() {
        setCount(count + 1);
      }

    function resetCounter() {
        setCount(0);
      }
    
    useEffect(() => {
        let interval = setInterval(() => {
          setCount((count) => count + 1)}, 1000);

          return () => clearInterval(interval);
        }, []);

return (
    <>
      <p className="counter">Cookies: {count}</p>
      <div className="game">
        <div onClick={incrementCounter}
            className="cookie">
        </div>
        <Upgrades />
        <div onClick={resetCounter} 
            className="monster"> 
        </div>
      </div>
    </>
)
}