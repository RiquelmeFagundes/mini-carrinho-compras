import React from "react";
import { useState } from "react";

export default function Tooltip({text, children }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <div className="tooltip-box">{text}</div>}
    </div>
  );
}
