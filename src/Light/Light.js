import React from "react";

import "./Light.css";

export default function Light({ color, isOn }) {
  return (
    <div className="light-wrapper">
      <div className={`light ${color}-light ${isOn && "on"}`}></div>
    </div>
  );
}
