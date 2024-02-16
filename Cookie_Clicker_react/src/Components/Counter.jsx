import React, { useState, useEffect } from 'react';
import './Counter.css';
import './Upgrades';
import ResetButton from "./Monster";
import Upgrades from './Upgrades';

export default function Counter({ count, setCount }) {
    const [totalCPS, setTotalCPS] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(preCount => preCount + 1 + totalCPS);
        }, 1000);

        return () => clearInterval(interval);
    }, [totalCPS, setCount]);

    return (
        <div>
            <p className="counter">Cookies: {count}</p>
            <Upgrades count={count} setCount={setCount} setTotalCPS={setTotalCPS} />
            <ResetButton resetCount={setCount} resetUpgrades={setTotalCPS} />
        </div>
    );
}
