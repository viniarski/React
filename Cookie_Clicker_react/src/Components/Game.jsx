import { useState, useEffect } from "react";


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
    <div className="cookie">
        <p>Cookies: {count}</p>
        <button onClick={incrementCounter}>Get cookie</button>
        <button onClick={resetCounter}>Reset counter</button>
    </ div>
)
}