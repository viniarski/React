import React from "react";
import './Cookie.css';
import cookieImg from "./assets/cookie.png";

export default function Cookie({ incrementCounter }) {
  return (
    <img
      src={cookieImg}
      alt="Cookie"
      className="image cookie"
      onClick={incrementCounter}
    />
  );
}
