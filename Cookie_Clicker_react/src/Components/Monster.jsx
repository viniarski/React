import React from "react";
import monsterImg from "./assets/cookie_monster.png";
import './Monster.css'

export default function ResetButton({ functionToChangeCount, resetUpgrades}) {

  const handleReset = () => {
    functionToChangeCount(0);
    resetUpgrades();
  }

  return (
    <img
      src={monsterImg}
      alt="Monster"
      className="monster"
      onClick={handleReset}
    />
  );
}