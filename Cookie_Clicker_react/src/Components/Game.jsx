import { useState, useEffect } from "react";
import './Game.css';
import Upgrades from "./Upgrades";
import cookieImg from './assets/cookie.png';
import monsterImg from './assets/cookie_monster.png';

// The 🍪 🍪 🍪 Game!
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
        <img src={cookieImg} alt="Cookie" className="image cookie" onClick={incrementCounter} />
        <Upgrades />
        <img src={monsterImg} alt="Monster" className="image monster" onClick={resetCounter} />
      </div>
    </>
)
}