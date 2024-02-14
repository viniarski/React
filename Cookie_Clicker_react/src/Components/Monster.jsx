import React from "react";
import monsterImg from "./assets/cookie_monster.png";
import './Monster.css'

export default function Monster({ resetCounter }) {

  return (
    <img
      src={monsterImg}
      alt="Monster"
      className="monster"
      onClick={resetCounter}
    />
  );
}
