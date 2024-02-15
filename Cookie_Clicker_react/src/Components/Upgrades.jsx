import React, { useState, useEffect } from 'react';
import './Upgrades.css';

const upgradesData = [
  {
    button: 'Granny',
    cost: 10,
    cookiesPerSecond: 1,
  },
  {
    button: 'Super oven',
    cost: 100,
    cookiesPerSecond: 10,
  },
  {
    button: 'Factory',
    cost: 1000,
    cookiesPerSecond: 100,
  },
];

export default function Upgrades({ count, setCount }) {
  const [upgrades] = useState(upgradesData);
  const [totalCookiesPerSecond, setTotalCookiesPerSecond] = useState(0);

  const buyUpgrade = (index) => {
    const cost = upgrades[index].cost
    if (count >= cost) {
      const upgrade = upgrades[index].cookiesPerSecond;

      setCount(preCount => preCount - cost);
      setTotalCookiesPerSecond(prevTotalcookiesPerSecond => prevTotalcookiesPerSecond + upgrade);
    } else {
      console.log('Not enough cookies to buy this upgrade!');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(preCount => preCount + totalCookiesPerSecond);
    }, 1000);

    return () => clearInterval(interval);
  }, [totalCookiesPerSecond]);

  return (
    <div className="upgrades">
      {upgrades.map((upgrade, index) => (
        <button
          className={`upg-btn`}
          key={upgrade.button}
          onClick={() => buyUpgrade(index)}
        >
          {upgrade.button}| Cost: {upgrade.cost} | CPS: {upgrade.cookiesPerSecond}
        </button>
      ))}
    </div>
  );
}